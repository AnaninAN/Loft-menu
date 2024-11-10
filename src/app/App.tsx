import { Suspense } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { AppContainer } from '@/shared/ui/AppContainer';
import { Footer } from '@/widgets/Footer';
import { ContentPage } from '@/widgets/ContentPage';
import { Navbar } from '@/widgets/Navbar';
import { useInit } from '@/shared/lib/hooks/useInit/useInit';

export const App = () => {
  useTheme();
  useInit();

  return (
    <div className="app">
      <Suspense>
        <Navbar />
        <ContentPage>
          <AppContainer>
            <AppRouter />
          </AppContainer>
        </ContentPage>
        <Footer />
      </Suspense>
    </div>
  );
};
