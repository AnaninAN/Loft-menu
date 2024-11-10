import MenuIcon from '@/shared/assets/icons/menu.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';
import ChatIcon from '@/shared/assets/icons/chat.svg';

import { MenuItemType } from '../types/menu';
import { LOCALSTORAGE_TABLE_KEY } from '@/shared/const/localstorage';

export const getMenuItems = () => {
  const table = localStorage.getItem(LOCALSTORAGE_TABLE_KEY);

  const menuItemsList: MenuItemType[] = [
    {
      path: `/${table}/chat`,
      text: 'MENU_CHAT',
      Icon: ChatIcon,
    },
    {
      path: `/${table}`,
      text: 'MENU_MAIN',
      Icon: MenuIcon,
    },
    {
      path: `/${table}/check`,
      text: 'MENU_CHECK',
      Icon: CheckIcon,
    },
  ];

  return menuItemsList;
};
