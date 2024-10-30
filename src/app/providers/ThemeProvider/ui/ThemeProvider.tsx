import { PropsWithChildren, useMemo, useState } from 'react';

import { Theme, ThemeContext } from '@/shared/lib/ThemeContext/ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
