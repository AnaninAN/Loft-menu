import { Decorator } from '@storybook/react';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => {
    document.body.className = theme;

    return (
      <ThemeProvider initialTheme={theme}>
        <div className="app">
          <Story />
        </div>
      </ThemeProvider>
    );
  };
