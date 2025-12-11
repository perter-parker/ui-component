import fs from "fs"
import path from "path"

export type ComponentCategory = "atoms" | "molecules" | "organisms" | "templates"

export interface ComponentInfo {
  name: string
  category: ComponentCategory
  path: string
  displayName: string
}

const componentsDir = path.join(process.cwd(), "components")

export function getComponentsByCategory(category: ComponentCategory): ComponentInfo[] {
  const categoryPath = path.join(componentsDir, category)
  
  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
  
  return files
    .filter((file) => file.endsWith(".tsx") && !file.startsWith("_"))
    .map((file) => {
      const name = file.replace(".tsx", "")
      return {
        name,
        category,
        path: `@/components/${category}/${name}`,
        displayName: name
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/^./, (str) => str.toUpperCase()),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getAllComponents(): ComponentInfo[] {
  const categories: ComponentCategory[] = ["atoms", "molecules", "organisms", "templates"]
  
  return categories.flatMap((category) => getComponentsByCategory(category))
}

export function getComponent(category: ComponentCategory, name: string): ComponentInfo | null {
  const components = getComponentsByCategory(category)
  return components.find((c) => c.name === name) || null
}

