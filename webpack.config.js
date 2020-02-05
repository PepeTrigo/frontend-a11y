const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/01_A11yIntro.html",
      inject: true,
      chunks: ["index"],
      filename: "01_A11yIntro.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/02_HTML.html",
      inject: true,
      chunks: ["index"],
      filename: "02_HTML.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/03_Focus.html",
      inject: true,
      chunks: ["index"],
      filename: "03_Focus.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/04_CSS.html",
      inject: true,
      chunks: ["index"],
      filename: "04_CSS.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/05_ARIA.html",
      inject: true,
      chunks: ["index"],
      filename: "05_ARIA.html"
    }),
    new CopyWebpackPlugin([{ from: "src/_images", to: "images" }])
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|oft)$/,
        use: ["file-loader"]
      }
    ]
  }
};
