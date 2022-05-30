const { baseConf } = require("./webpack.base.conf.js");
const { merge } = require("webpack-merge");

module.exports = merge(baseConf, {
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    host: "127.0.0.1",
    port: 9000,
    hot: true,
    open: true,
  },
});
