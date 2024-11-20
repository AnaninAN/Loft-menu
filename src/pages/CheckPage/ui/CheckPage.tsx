import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { tableActions } from '@/entities/Table';

export const CheckPage = memo(() => {
  const { id } = useParams();
  const { t } = useTranslation('check');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(tableActions.init(id));
  }, [id, dispatch]);

  return <Page>{t('check-page')}</Page>;
});
