import { Decorator } from '@storybook/react';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme as Theme;
  document.body.className = theme;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className="app">
        <Story />
      </div>
    </ThemeProvider>
  );
};
