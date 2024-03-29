import {
  ProgressPlugin,
  WebpackPluginInstance,
  HotModuleReplacementPlugin,
  DefinePlugin
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {
    isDev,
    paths,
    analyzer,
    apiUrl,
    project
  } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),

    new ProgressPlugin(),

    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ];

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const developmentPlugins = [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ];

  const productionPlugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    })
  ];

  return isDev ? plugins.concat(developmentPlugins) : plugins.concat(productionPlugins);
};
