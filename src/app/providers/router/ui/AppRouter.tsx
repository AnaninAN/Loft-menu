import { memo, Suspense, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';

import { routes } from '../lib/routes';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routes).map(renderWithWrapper)}</Routes>;
});
