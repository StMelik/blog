import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevSrver } from './buildDevSrver';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { isDev, mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolve(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: buildDevSrver(options)
  };
};
