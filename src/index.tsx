import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
