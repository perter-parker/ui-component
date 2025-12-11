import * as fs from "fs";
import * as path from "path";

/**
 * PascalCase를 kebab-case로 변환
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * 파일명 변경 및 import 경로 업데이트
 */
function renameUiFiles() {
  const cwd = process.cwd();
  const uiDir = path.join(cwd, "components", "ui");

  if (!fs.existsSync(uiDir)) {
    console.error("components/ui 폴더를 찾을 수 없습니다.");
    process.exit(1);
  }

  // 1. 모든 .tsx 파일 찾기 (stories 제외)
  const files = fs.readdirSync(uiDir);
  const tsxFiles = files.filter(
    (file) =>
      file.endsWith(".tsx") &&
      !file.endsWith(".stories.tsx") &&
      /^[A-Z]/.test(file) // PascalCase로 시작하는 파일만
  );

  console.log(`📁 발견된 PascalCase 파일: ${tsxFiles.length}개\n`);

  const renameMap: Map<string, string> = new Map();

  // 2. 파일명 변경
  for (const oldFileName of tsxFiles) {
    const oldPath = path.join(uiDir, oldFileName);
    const baseName = oldFileName.replace(".tsx", "");
    const newFileName = `${toKebabCase(baseName)}.tsx`;
    const newPath = path.join(uiDir, newFileName);

    // 이미 kebab-case인 경우 스킵
    if (oldFileName === newFileName) {
      continue;
    }

    // 파일이 존재하는 경우에만 변경
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      renameMap.set(baseName, toKebabCase(baseName));
      console.log(`✓ ${oldFileName} -> ${newFileName}`);
    }
  }

  console.log(`\n📝 Import 경로 업데이트 중...\n`);

  // 3. 모든 파일에서 import 경로 업데이트
  const searchDirs = [
    path.join(cwd, "components"),
    path.join(cwd, "app"),
    path.join(cwd, "lib"),
    path.join(cwd, "hooks"),
  ];

  let updatedFiles = 0;

  for (const searchDir of searchDirs) {
    if (!fs.existsSync(searchDir)) {
      continue;
    }

    updateImportsInDirectory(searchDir, renameMap);
  }

  function updateImportsInDirectory(
    dir: string,
    map: Map<string, string>
  ): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        updateImportsInDirectory(fullPath, map);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))
      ) {
        try {
          let content = fs.readFileSync(fullPath, "utf-8");
          let modified = false;

          // import 경로 업데이트
          for (const [oldName, newName] of map.entries()) {
            // @/components/ui/Button -> @/components/ui/button
            const oldImport = `@/components/ui/${oldName}`;
            const newImport = `@/components/ui/${newName}`;

            if (content.includes(oldImport)) {
              content = content.replace(
                new RegExp(oldImport.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
                newImport
              );
              modified = true;
            }
          }

          if (modified) {
            fs.writeFileSync(fullPath, content, "utf-8");
            updatedFiles++;
            console.log(`  ✓ ${path.relative(cwd, fullPath)}`);
          }
        } catch (error) {
          console.error(`오류: ${fullPath}`, error);
        }
      }
    }
  }

  console.log(`\n✅ 완료! ${updatedFiles}개 파일의 import 경로가 업데이트되었습니다.`);
}

// 실행
renameUiFiles();

