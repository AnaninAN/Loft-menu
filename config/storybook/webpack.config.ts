import { Configuration, ProvidePlugin } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: { '@': paths.src },
  };

  config.plugins?.push(
    new ProvidePlugin({
      React: 'react',
    })
  );

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
