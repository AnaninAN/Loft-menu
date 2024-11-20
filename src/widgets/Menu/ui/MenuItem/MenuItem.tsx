import cls from './MenuItem.module.scss';

import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { MenuItemType, MenuList } from '../../model/types/menu';
import { AppLink } from '@/shared/ui/AppLink';
import { AppIcon } from '@/shared/ui/AppIcon';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MenuItemProps {
  item: MenuItemType;
  active: boolean;
  onClick: (text: string) => void;
}

export const MenuItem = memo((props: MenuItemProps) => {
  const { item, active, onClick } = props;
  const { t } = useTranslation();

  const menuTranslate = useMemo(
    (): Record<MenuList, string> => ({
      MENU_MAIN: t('menu.main'),
      MENU_CHAT: t('menu.chat'),
      MENU_CHECK: t('menu.check'),
    }),
    [t]
  );

  return (
    <AppLink
      theme="primary"
      to={item.path}
      className={cls.menuItem}
      link={item.path !== '/chat'}
      onClick={() => onClick(item.path)}
    >
      <AppIcon Svg={item.Icon} theme="primary" />
      <span className={classNames('', { [cls.active]: active }, [])}>
        {menuTranslate[item.text]}
      </span>
    </AppLink>
  );
});
