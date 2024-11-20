import path from 'path';
import { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
  ProjectType,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === ('development' as BuildMode);
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const project: ProjectType = 'frontend';
  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project,
  });

  return config;
};
