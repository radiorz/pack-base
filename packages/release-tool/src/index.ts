import { join } from "node:path";
import { Archive, ArchiveOptions } from "./archive";
const rootDir = process.cwd();
const releaseDir = join(rootDir);

enum STRATEGY {
  "obfuscator" = "obfuscator", //
  "bytenode" = "bytenode", //
}
class ObfuscatorOptions {
  stategy = STRATEGY.obfuscator;
  enabled: boolean = true;
  includes: string[];
  excludes: string[];
  tempPath: string;
}
class BytenodeOptions {
  stategy = STRATEGY.bytenode;
  enabled: boolean = true;
  includes: string[];
  excludes: string[];
  tempPath: string;
}
class Obfuscator {
  constructor(private readonly options: ObfuscatorOptions) {}
  start() {
    if (!this.options.enabled) {
      return;
    }
  }
}

class Bytenode {
  constructor(private readonly options: BytenodeOptions) {}
  start() {
    if (!this.options.enabled) {
      return;
    }
  }
}
class StrategyFactory {
  static create(options) {
    if (options.strategy === STRATEGY.bytenode) {
      return new Bytenode(options);
    }
    return new Obfuscator(options);
  }
}
class ReleaseOptions {
  strategyOptions: (BytenodeOptions | ObfuscatorOptions)[];
  archiveOptions: ArchiveOptions;
}
class Release {
  constructor(private readonly options: ReleaseOptions) {}
  start() {
    for (const strategyOption of this.options.strategyOptions) {
      if (!strategyOption.enabled) {
        continue;
      }
      const strategyExecutor = StrategyFactory.create(strategyOption);
      strategyExecutor.start();
    }

    const archiveExecutor = new Archive(this.options.archiveOptions);
    archiveExecutor.init().start();
  }
}
