import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Language, LanguageSelect } from '@/entities/Language';
import { lng } from '@/shared/config/i18n/i18n';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const [lngState, setLngState] = useState<Language>(lng);

  useEffect(() => {
    i18n.changeLanguage(lngState);
  }, [lngState]);

  const onChange = (value: string) => {
    setLngState(value as Language);
  };

  return <LanguageSelect onChange={onChange} className={className} />;
};
