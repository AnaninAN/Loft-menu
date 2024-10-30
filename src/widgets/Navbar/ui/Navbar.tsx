import cls from './Navbar.module.scss';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Header } from '@/widgets/Header';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('translation');
  const table = t('table1');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header table={table} />
    </div>
  );
};
