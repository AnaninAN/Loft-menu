import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation('translation');

  return <div>{t('not-found-page')}</div>;
});
