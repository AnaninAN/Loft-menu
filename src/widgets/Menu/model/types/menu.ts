export type MenuList = 'MENU_MAIN' | 'MENU_CHAT' | 'MENU_CHECK';

export interface MenuItemType {
  path: string;
  text: MenuList;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
