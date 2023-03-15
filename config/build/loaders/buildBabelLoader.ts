import { BuildOptions } from '../types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions) => ({
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['i18next-extract', {
          locales: ['ru', 'en'],
          keyAsDefaultValue: ['ru', 'en'],
          outputPath: 'public/locales/{{locale}}/{{ns}}.json'
        }],
        isDev && require.resolve('react-refresh/babel')
      ].filter(Boolean)
    }
  }
});
