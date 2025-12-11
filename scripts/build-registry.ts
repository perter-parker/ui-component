import * as fs from "fs";
import * as path from "path";

interface RegistryFile {
  path: string;
  content: string;
  type: "registry:block";
  target: string;
}

interface RegistryBlock {
  name: string;
  type: "registry:block";
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface IndexEntry {
  name: string;
  type: "registry:block";
  category: string;
  dependencies: string[];
  registryDependencies: string[];
}

// 제외할 파일명 패턴
const EXCLUDED_FILES = ["index.tsx", "page.tsx"];

// 제외할 파일 확장자 패턴 (정규식)
const EXCLUDED_PATTERNS = [/\.stories\.tsx$/i];

// 제외할 라이브러리 (react, next 관련)
const EXCLUDED_DEPENDENCIES = [
  "react",
  "react-dom",
  "next",
  "next/image",
  "next/link",
];

/**
 * components 폴더 경로 찾기
 */
function findComponentsDir(): string {
  const cwd = process.cwd();
  const possiblePaths = [
    path.join(cwd, "components"),
    path.join(cwd, "src", "components"),
  ];

  for (const dirPath of possiblePaths) {
    if (fs.existsSync(dirPath)) {
      return dirPath;
    }
  }

  throw new Error("components 폴더를 찾을 수 없습니다.");
}

/**
 * 디렉토리를 재귀적으로 탐색하여 .tsx 파일 찾기
 */
function findTsxFiles(
  dirPath: string,
  basePath: string,
  files: string[] = []
): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    if (entry.isDirectory()) {
      findTsxFiles(fullPath, basePath, files);
    } else if (entry.isFile()) {
      // .tsx 파일이고 제외 목록에 없으면 추가
      if (entry.name.endsWith(".tsx")) {
        // 제외할 파일명 체크
        if (EXCLUDED_FILES.includes(entry.name)) {
          continue;
        }
        // 제외할 패턴 체크 (예: .stories.tsx)
        const shouldExclude = EXCLUDED_PATTERNS.some((pattern) =>
          pattern.test(entry.name)
        );
        if (!shouldExclude) {
          files.push(fullPath);
        }
      }
    }
  }

  return files;
}

/**
 * 파일에서 dependencies 추출 (외부 라이브러리)
 */
function extractDependencies(content: string): string[] {
  const dependencies = new Set<string>();

  // import 구문 패턴: import ... from "package-name" 또는 import ... from 'package-name'
  const importRegex =
    /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?["']([^"']+)["']/g;

  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const packageName = match[1];

    // 상대 경로나 절대 경로는 제외
    if (packageName.startsWith(".") || packageName.startsWith("/")) {
      continue;
    }

    // @/ 로 시작하는 경로는 제외 (내부 import)
    if (packageName.startsWith("@/")) {
      continue;
    }

    // scoped package에서 패키지명만 추출 (예: @radix-ui/react-accordion -> @radix-ui/react-accordion)
    const packageMatch = packageName.match(/^(@[^/]+\/[^/]+|[^/]+)/);
    if (packageMatch) {
      const dep = packageMatch[1];
      if (!EXCLUDED_DEPENDENCIES.includes(dep)) {
        dependencies.add(dep);
      }
    }
  }

  return Array.from(dependencies).sort();
}

/**
 * 파일에서 registryDependencies 추출 (@/components/ui/xxx)
 */
function extractRegistryDependencies(content: string): string[] {
  const registryDeps = new Set<string>();

  // @/components/ui/xxx 패턴 찾기
  const registryImportRegex =
    /from\s+["']@\/components\/ui\/([^"']+)["']/g;

  let match;
  while ((match = registryImportRegex.exec(content)) !== null) {
    const componentName = match[1];
    // PascalCase를 kebab-case로 변환 (예: Button -> button)
    const kebabCase = componentName
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "");
    registryDeps.add(kebabCase);
  }

  return Array.from(registryDeps).sort();
}

/**
 * 파일명을 kebab-case로 변환
 */
function toKebabCase(fileName: string): string {
  return fileName
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "")
    .replace(/\.tsx$/, "");
}

/**
 * 카테고리 추출 (경로에서)
 */
function extractCategory(relativePath: string): string {
  // components/blocks/marketing/hero/xxx.tsx -> marketing
  const parts = relativePath.split(path.sep);
  const blocksIndex = parts.indexOf("blocks");
  if (blocksIndex !== -1 && blocksIndex + 1 < parts.length) {
    return parts[blocksIndex + 1];
  }
  return "uncategorized";
}

/**
 * 블록 컴포넌트 파일 분석 및 RegistryBlock 생성
 */
function analyzeBlockFile(
  filePath: string,
  componentsDir: string
): RegistryBlock | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const relativePath = path.relative(componentsDir, filePath);
    const fileName = path.basename(filePath, ".tsx");
    const blockName = toKebabCase(fileName);

    // dependencies 추출
    const dependencies = extractDependencies(content);
    const registryDependencies = extractRegistryDependencies(content);

    // target 경로 생성 (원본 경로와 동일하게, components/ 포함)
    // relativePath는 componentsDir 기준이므로 components/를 앞에 붙임
    const target = `components/${relativePath.replace(/\\/g, "/")}`;

    // files 배열 생성
    const files: RegistryFile[] = [
      {
        // path는 blocks부터 시작 (components/blocks/... -> blocks/...)
        path: relativePath
          .replace(/^components[\\/]/, "")
          .replace(/\\/g, "/"),
        content: content,
        type: "registry:block",
        target: target,
      },
    ];

    return {
      name: blockName,
      type: "registry:block",
      dependencies,
      registryDependencies,
      files,
    };
  } catch (error) {
    console.error(`파일 분석 실패: ${filePath}`, error);
    return null;
  }
}

/**
 * 메인 함수
 */
function buildRegistry() {
  try {
    const cwd = process.cwd();
    const componentsDir = findComponentsDir();
    const blocksDir = path.join(componentsDir, "blocks");

    if (!fs.existsSync(blocksDir)) {
      throw new Error(`blocks 폴더를 찾을 수 없습니다: ${blocksDir}`);
    }

    console.log(`📁 Blocks 디렉토리 스캔 시작: ${blocksDir}`);

    // 모든 .tsx 파일 찾기
    const tsxFiles = findTsxFiles(blocksDir, blocksDir);
    console.log(`📄 발견된 파일 수: ${tsxFiles.length}`);

    // 각 파일 분석
    const blocks: RegistryBlock[] = [];
    const indexEntries: IndexEntry[] = [];

    for (const filePath of tsxFiles) {
      const block = analyzeBlockFile(filePath, componentsDir);
      if (block) {
        blocks.push(block);

        // index.json용 엔트리 생성
        const relativePath = path.relative(componentsDir, filePath);
        const category = extractCategory(relativePath);

        indexEntries.push({
          name: block.name,
          type: block.type,
          category,
          dependencies: block.dependencies,
          registryDependencies: block.registryDependencies,
        });
      }
    }

    // public/registry 폴더 생성
    const registryDir = path.join(cwd, "public", "registry");
    if (!fs.existsSync(registryDir)) {
      fs.mkdirSync(registryDir, { recursive: true });
      console.log(`📁 폴더 생성: ${registryDir}`);
    }

    // 각 블록을 JSON 파일로 저장
    console.log(`💾 JSON 파일 생성 중...`);
    for (const block of blocks) {
      const jsonPath = path.join(registryDir, `${block.name}.json`);
      const jsonContent = JSON.stringify(block, null, 2);
      fs.writeFileSync(jsonPath, jsonContent, "utf-8");
      console.log(`  ✓ ${block.name}.json`);
    }

    // index.json 생성
    const indexPath = path.join(registryDir, "index.json");
    const indexContent = JSON.stringify(indexEntries, null, 2);
    fs.writeFileSync(indexPath, indexContent, "utf-8");
    console.log(`  ✓ index.json`);

    console.log(`\n✅ 완료! 총 ${blocks.length}개의 블록이 생성되었습니다.`);
    console.log(`📂 출력 위치: ${registryDir}`);
  } catch (error) {
    console.error("❌ 오류 발생:", error);
    process.exit(1);
  }
}

// 스크립트 실행
buildRegistry();

