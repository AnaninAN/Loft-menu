export enum AppRoutes {
  MENU = 'menu',
  CHECK = 'check',
  CHAT = 'chat',
  // последний
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MENU]: '/:id',
  [AppRoutes.CHECK]: '/:id/check',
  [AppRoutes.CHAT]: '/:id/chat',
  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
