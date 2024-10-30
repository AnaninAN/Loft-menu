import { useTranslation } from 'react-i18next';

import { Language, LanguageSelect } from '@/entities/Language';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const onChange = (value: string) => {
    (value as Language) === 'RU'
      ? i18n.changeLanguage('ru')
      : i18n.changeLanguage('en');
  };

  return <LanguageSelect onChange={onChange} className={className} />;
};
