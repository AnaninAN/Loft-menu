export enum AppRoutes {
  MENU = 'menu',
  CHECK = 'check',
  // последний
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MENU]: '/', // /:id
  [AppRoutes.CHECK]: '/check', // /:id/check
  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
