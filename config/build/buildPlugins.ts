import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(
  paths: BuildPaths
): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin(
      // куда будут встраиваться все скрипты
      { template: paths.html }
    ),
    new webpack.ProgressPlugin(),
  ];
}
