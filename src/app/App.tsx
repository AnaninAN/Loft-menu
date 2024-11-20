import { Suspense } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { AppContainer } from '@/shared/ui/AppContainer';
import { Footer } from '@/widgets/Footer';
import { ContentPage } from '@/widgets/ContentPage';
import { Navbar } from '@/widgets/Navbar';
import { useTable } from '@/shared/lib/hooks/useTable/useTable';

export const App = () => {
  useTheme();
  const table = useTable();

  return (
    <div className="app">
      <Suspense>
        {table && <Navbar />}
        <ContentPage>
          <AppContainer>
            <AppRouter />
          </AppContainer>
        </ContentPage>
        {table && <Footer />}
      </Suspense>
    </div>
  );
};
