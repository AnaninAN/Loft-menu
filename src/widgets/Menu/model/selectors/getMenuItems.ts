import MenuIcon from '@/shared/assets/icons/menu.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';
import ChatIcon from '@/shared/assets/icons/chat.svg';

import { MenuItemType } from '../types/menu';
import { useTable } from '@/shared/lib/hooks/useTable/useTable';

export const getMenuItems = () => {
  const table = useTable();

  const menuItemsList: MenuItemType[] = [
    {
      path: `/chat`,
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
