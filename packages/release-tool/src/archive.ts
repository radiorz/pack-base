export class ArchiveOptions {
  includes: string[] = ["**/*.@(js)"]; // 所有js 文件
  excludes: string[] = ["**/config/**", "**/node_modules/**"]; // 所有无关文件
  type: TYPE = TYPE.zip;
  hasDate: boolean = true;
}
enum TYPE {
  zip = "zip",
  gz = "gz",
}
const TYPE_EXT = {
  [TYPE.zip]: ".zip",
  [TYPE.gz]: ".tar.gz",
};
export class Archive {
  constructor(private options: ArchiveOptions = new ArchiveOptions()) {}
  init() {
    return this;
  }
  start() {}
}
