import { Configuration, DefinePlugin, ProvidePlugin } from 'webpack';
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
  JSON.stringify(''),
    config.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
      })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config.module!.rules = config?.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
