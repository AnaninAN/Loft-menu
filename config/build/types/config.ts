import { Configuration } from 'webpack';

export type BuildMode = Configuration['mode'];

export interface BuildPaths {
  src: string;
  entry: string;
  output: string;
  html: string;
  locales: string;
  buildLocales: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
