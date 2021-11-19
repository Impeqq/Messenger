const path = require("path");
const miniCss = require("mini-css-extract-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/Messenger/",
    filename: "static/[contenthash].js",
    chunkFilename: "static/[contenthash].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          miniCss.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()],
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API": JSON.stringify(process.env.API),
    }),
    new LiveReloadPlugin({
      protocol: "http",
      port: 9001,
      hostname: "localhost",
      appendScriptTag: true,
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/assets/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "src/assets/404.html",
    }),
    new miniCss({
      filename: "style.css",
    }),
  ],
};
