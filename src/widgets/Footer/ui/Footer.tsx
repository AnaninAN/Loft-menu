import cls from './Footer.module.scss';

import { useTranslation } from 'react-i18next';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.footer, {}, [className])}>
      <AppContainer>{t('footer')}</AppContainer>
    </div>
  );
};
