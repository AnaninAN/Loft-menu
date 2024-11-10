export type Menu = 'MENU_MAIN' | 'MENU_CHAT' | 'MENU_CHECK';

export interface MenuItemType {
  path: string;
  text: Menu;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
