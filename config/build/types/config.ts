import { Configuration } from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: Configuration['mode'];
  port: number;
  open: boolean;
}

export interface BuildOptions {
  mode: Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  open: boolean
}
