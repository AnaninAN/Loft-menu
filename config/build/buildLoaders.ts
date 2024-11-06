import { ModuleOptions } from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const { isDev } = options;

  const esbuildLoader = {
    test: /\.tsx?$/,
    loader: 'esbuild-loader',
    exclude: /node_modules/,
    options: {
      target: 'es2015',
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, esbuildLoader, cssLoader];
}
