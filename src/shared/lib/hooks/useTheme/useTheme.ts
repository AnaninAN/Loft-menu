import { useCallback, useContext, useEffect } from 'react';

import { Theme, ThemeContext } from '@/shared/lib/ThemeContext/ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || '';
  }, [theme]);

  const toggleTheme = useCallback(() => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
  }, [theme, setTheme]);

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
