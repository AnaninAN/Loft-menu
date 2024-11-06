import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect, SelectOption } from '@/shared/ui/AppSelect';
import { Theme } from '@/app/providers/ThemeProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemSwitcherProps {
  className?: string;
}

export const ThemSwitcher = ({ className }: ThemSwitcherProps) => {
  useTranslation;
  const { t } = useTranslation('translation');
  const { toggleTheme, theme } = useTheme();

  const options = useMemo(
    (): SelectOption<Theme>[] => [
      { value: Theme.LIGHT, content: t('light') },
      { value: Theme.DARK, content: t('dark') },
    ],
    [t]
  );

  return (
    <AppSelect
      className={className}
      onChange={toggleTheme}
      options={options}
      value={theme}
    />
  );
};
