import cls from './Menu.module.scss';

import { memo, useCallback, useMemo, useState } from 'react';

import { getMenuItems } from '../../model/selectors/getMenuItems';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuList } from '../../model/types/menu';
import { ServerModal } from '@/widgets/ServerModal';

type ActiveMenuType = Record<MenuList, boolean>;

const resetActiveMenu: ActiveMenuType = {
  MENU_MAIN: false,
  MENU_CHAT: false,
  MENU_CHECK: false,
};

const defaultActiveMenu: ActiveMenuType = {
  MENU_MAIN: true,
  MENU_CHAT: false,
  MENU_CHECK: false,
};

export const Menu = memo(() => {
  const menuItemsList = getMenuItems();
  const [activeMenu, setActiveMenu] =
    useState<ActiveMenuType>(defaultActiveMenu);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = useCallback(
    (text: string) => {
      if (text !== ('MENU_CHAT' as MenuList)) {
        setActiveMenu(resetActiveMenu);
        setActiveMenu((prev) => ({ ...prev, [text]: true }));
      } else {
        setOpenModal(true);
      }
    },
    [setActiveMenu, setOpenModal]
  );

  const itemsList = useMemo(
    () =>
      menuItemsList.map((item) => (
        <MenuItem
          key={item.text}
          item={item}
          active={activeMenu[item.text]}
          onClick={handleClick}
        />
      )),
    [menuItemsList, activeMenu, handleClick]
  );

  return (
    <div className={cls.menu}>
      {itemsList}
      <ServerModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
});
