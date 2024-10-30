import { RouteProps } from 'react-router-dom';

import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { MenuPage } from '@/pages/MenuPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MENU]: {
    path: RoutePath.menu,
    element: <MenuPage />,
  },
  // последний
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
