import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    // указываем расширения, которые не будут указываться при импорте
    // import component from '.component'
    extensions: [".tsx", ".ts", ".js"],
  };
}
