const path = require("path");
module.exports = {
  entry: path.join(__dirname, "./index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ["../plain-loader.js"],
      },
    ],
  },
};
