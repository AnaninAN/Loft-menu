import cls from './Menu.module.scss';

import { memo, useMemo } from 'react';

import { getMenuItems } from '../../model/selectors/getMenuItems';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = memo(() => {
  const menuItemsList = getMenuItems();

  const itemsList = useMemo(
    () => menuItemsList.map((item) => <MenuItem key={item.text} item={item} />),
    [menuItemsList]
  );

  return <div className={cls.menu}>{itemsList}</div>;
});
