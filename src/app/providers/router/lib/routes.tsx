import { RouteProps } from 'react-router-dom';

import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { MenuPage } from '@/pages/MenuPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CheckPage } from '@/pages/CheckPage';

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MENU]: {
    path: `${RoutePath.menu}:id`,
    element: <MenuPage />,
  },
  [AppRoutes.CHECK]: {
    path: `${RoutePath.menu}:id${RoutePath.check}`,
    element: <CheckPage />,
  },
  // последний
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
