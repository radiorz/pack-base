import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/**/*.ts" /* 需要编译的文件 */],
  format: ["esm", "cjs"], // 打包的文件
  dts: true, // 类型声明
  splitting: true, // 分包
  sourcemap: true, // 关联源代码
  clean: true, // 清理 dist
  treeshake: true, // 清理
  minify: true, // 压缩
  // esbuildPlugins
  banner: {
    js: `
     // test banner    
    `,
  },
});
