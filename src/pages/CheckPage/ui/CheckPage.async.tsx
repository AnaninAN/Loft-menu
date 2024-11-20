import { lazy } from 'react';

export const CheckPageAsync = lazy(() =>
  import('./CheckPage').then((module) => ({ default: module.CheckPage }))
);
