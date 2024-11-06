/* eslint-disable react/destructuring-assignment */
import i18n from '@/shared/config/i18n/i18nForTests';

import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';

export const TranslationDecorator = (StoryComponent: Story, context: any) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};