import cls from './MenuItem.module.scss';

import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Menu, MenuItemType } from '../../model/types/menu';
import { AppLink } from '@/shared/ui/AppLink';
import { AppIcon } from '@/shared/ui/AppIcon';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = memo(({ item }: MenuItemProps) => {
  const { t } = useTranslation();

  const menuTranslate = useMemo(
    (): Record<Menu, string> => ({
      MENU_MAIN: t('menu.main'),
      MENU_CHAT: t('menu.chat'),
      MENU_CHECK: t('menu.check'),
    }),
    [t]
  );

  return (
    <AppLink theme="primary" to={item.path} className={cls.menuItem}>
      <AppIcon Svg={item.Icon} className={cls.icon} theme="primary" />
      <span className={cls.item}>{menuTranslate[item.text]}</span>
    </AppLink>
  );
});
