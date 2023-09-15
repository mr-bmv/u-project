import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  // нужно для гибкого управления всеми конфигурациями
  // пути подстраиваться динамически
  // теперь не важно, где будут лежать файлы
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  // использование переменных окружения для гибкого запуска и сборки
  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
