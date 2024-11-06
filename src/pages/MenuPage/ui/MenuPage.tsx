import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { AppButton } from '@/shared/ui/AppButton';

export const MenuPage = memo(() => {
  const { t } = useTranslation('dish');

  return (
    <Page>
      {t('dishes-page')}
      <br />
      <AppButton children="Hello!" theme="background_inverted" />
    </Page>
  );
});
