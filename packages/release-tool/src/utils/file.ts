import fs from "fs-extra";
import { glob } from "glob";
export async function ensureDirectory(directory: string) {
  // 文件夹不存在,就添加文件夹
  if (!fs.existsSync(directory)) {
    await fs.mkdir(directory, { recursive: true });
  }
}
export async function getFiles(includes, excludes) {
  const files = await glob(includes, { ignore: excludes });
  return files;
}
