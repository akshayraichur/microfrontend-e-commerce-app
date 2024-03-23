const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    hot: true,
  },
  plugins: [
    new ModuleFederation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./productsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
