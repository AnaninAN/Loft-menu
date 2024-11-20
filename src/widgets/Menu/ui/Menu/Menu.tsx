import cls from './Menu.module.scss';

import { memo, useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMenuItems } from '../../model/selectors/getMenuItems';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuList } from '../../model/types/menu';
import { ServerModal } from '@/widgets/ServerModal';

type ActiveMenuType = Record<MenuList, boolean>;

export const Menu = memo(() => {
  let { pathname } = useLocation();

  const defaultActiveMenu = useCallback((): ActiveMenuType => {
    return {
      MENU_MAIN: /^\/\d+$/.test(pathname),
      MENU_CHAT: false,
      MENU_CHECK: /^\/\d+\/check$/.test(pathname),
    };
  }, [pathname]);

  const menuItemsList = getMenuItems();
  const [activeMenu, setActiveMenu] =
    useState<ActiveMenuType>(defaultActiveMenu);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = useCallback(
    (text: string) => {
      if (text !== '/chat') {
        pathname = text;
        setActiveMenu(defaultActiveMenu);
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
