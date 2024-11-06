import type { Preview } from '@storybook/react';

import { Theme } from '../../src/shared/lib/ThemeContext/ThemeContext';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    theme: Theme.LIGHT,
  },
  decorators: [StyleDecorator, ThemeDecorator, TranslationDecorator],
};

export default preview;
