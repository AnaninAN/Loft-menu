import cls from './NotFoundPage.module.scss';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation('translation');

  return <div className={cls.notFoundPage}>{t('not-found-page')}</div>;
});
