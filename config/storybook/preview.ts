import type { Preview } from '@storybook/react';

import { Theme } from '../../src/shared/lib/ThemeContext/ThemeContext';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

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
  decorators: [StyleDecorator, ThemeDecorator],
};

export default preview;
