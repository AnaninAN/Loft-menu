export enum AppRoutes {
  MENU = 'menu',
  // последний
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MENU]: '/',
  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
