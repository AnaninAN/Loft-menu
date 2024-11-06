import i18n from '@/shared/config/i18n/i18nForTests';

import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';
import { Decorator } from '@storybook/react/*';

export const TranslationDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
