import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

export const MenuPage = memo(() => {
  const { t } = useTranslation('dish');

  return <Page>{t('dishes-page')}</Page>;
});
