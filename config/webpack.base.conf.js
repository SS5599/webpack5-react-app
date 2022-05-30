const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConf = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.join(__dirname, "../dist"),
    assetModuleFilename: "static/[hash][ext][query]",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 默认是8kb
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      title: "APP",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css"],
  },
};

module.exports = { baseConf };
