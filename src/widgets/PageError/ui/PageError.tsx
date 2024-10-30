import cls from './PageError.module.scss';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/AppButton';

interface ErrorPageProps {
  className?: string;
}

export const PageError = memo(({ className }: ErrorPageProps) => {
  const { t } = useTranslation('error');

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <p>{t('error-page')}</p>
      <AppButton theme="background_inverted" onClick={reloadPage}>
        {t('refresh-the-page')}
      </AppButton>
    </div>
  );
});
