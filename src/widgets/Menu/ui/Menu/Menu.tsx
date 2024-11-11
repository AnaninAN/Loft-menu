import cls from './Menu.module.scss';

import { memo, useMemo, useState } from 'react';

import { getMenuItems } from '../../model/selectors/getMenuItems';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuList } from '../../model/types/menu';

const defaultActiveMenu = {
  MENU_MAIN: false,
  MENU_CHAT: false,
  MENU_CHECK: false,
};

export const Menu = memo(() => {
  const menuItemsList = getMenuItems();
  const [activeMenu, setActiveMenu] = useState<Record<MenuList, boolean>>({
    ...defaultActiveMenu,
    MENU_MAIN: true,
  });

  const onClick = (text: string) => {
    setActiveMenu(defaultActiveMenu);
    setActiveMenu((prev) => ({ ...prev, [text]: true }));
  };

  const itemsList = useMemo(
    () =>
      menuItemsList.map((item) => (
        <MenuItem
          key={item.text}
          item={item}
          active={activeMenu[item.text]}
          onClick={onClick}
        />
      )),
    [menuItemsList, activeMenu]
  );

  return <div className={cls.menu}>{itemsList}</div>;
});
