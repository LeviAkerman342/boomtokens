const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const webpack = require("webpack");

const name = require("./package.json").name;

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, `./dist/${name}`),
  devServer: {
    port: 1000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    hot: true,
  },
  pages: {
    index: {
      entry: "./src/app/main.ts",
    },
  },
  publicPath: "/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
  },
  transpileDependencies: false,
});
