import { lazy } from 'react';

export const MenuPageAsync = lazy(() =>
  import('./MenuPage').then((module) => ({ default: module.MenuPage }))
);
