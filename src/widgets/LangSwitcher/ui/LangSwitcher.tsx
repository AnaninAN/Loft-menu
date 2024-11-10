import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect, SelectOption } from '@/shared/ui/AppSelect';
import type { Language } from '@/shared/types/language';
import { useLang } from '@/shared/lib/hooks/useLang/useLang';

interface LanguageSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LanguageSwitcherProps) => {
  const { t } = useTranslation();
  const { value, toggleLang } = useLang();

  const options = useMemo(
    (): SelectOption<Language>[] => [
      { value: 'ru', content: t('ru') },
      { value: 'en', content: t('en') },
    ],
    [t]
  );

  return (
    <AppSelect
      className={className}
      onChange={toggleLang}
      options={options}
      value={value}
    />
  );
});
