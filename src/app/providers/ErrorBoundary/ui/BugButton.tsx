import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui/AppButton';
// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <AppButton onClick={onThrow}>{t('throw error')}</AppButton>;
};
