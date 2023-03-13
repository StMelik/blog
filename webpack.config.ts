import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.relative(__dirname, 'src')
};

const config = (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const open = env.open || false;
  const analyzer = env.analyzer || false;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    open,
    analyzer,
    apiUrl,
    project: 'frontend'
  });
};

export default config;
