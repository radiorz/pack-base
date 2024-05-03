const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", // 指定构建的目标是node
  mode: "development", // 指定构建的模式是开发模式
  entry: {
    // 指定入口文件
    index: path.join(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"), // 指定输出的目录
    filename: "[name].js", // 指定输出的文件名
    clean: true, // 每次构建之前清空输出目录
  },
  devtool: "source-map", // 生成source-map
  externals: nodeExternals(), // 排除node
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
