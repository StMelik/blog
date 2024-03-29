import { Configuration } from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: Configuration['mode'];
  port: number;
  open: boolean;
  analyzer: boolean;
  apiUrl: string;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
  project: 'storybook' | 'frontend' | 'jest';
}
