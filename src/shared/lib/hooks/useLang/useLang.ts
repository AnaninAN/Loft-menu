import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '@/shared/types/language';

interface UseLangResult {
  value: Language;
  toggleLang: (value: string) => void;
}

export function useLang(): UseLangResult {
  const { i18n } = useTranslation();
  const [lngState, setLngState] = useState<Language>('ru');

  useEffect(() => {
    i18n.changeLanguage(lngState);
  }, [lngState]);

  const toggleLang = (value: string) => {
    setLngState(value as Language);
  };

  return { value: lngState, toggleLang };
}
