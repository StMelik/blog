import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: ['ru', 'en'],
            outputPath: 'public/locales/{{locale}}/{{ns}}.json'
          }
        ],
        [
          '@babel/plugin-transform-typescript',
          { isTsx }
        ],

        '@babel/plugin-transform-runtime',

        isTsx && !isDev && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid']
          }
        ],

        isDev && require.resolve('react-refresh/babel')
      ].filter(Boolean)
    }
  }
});
