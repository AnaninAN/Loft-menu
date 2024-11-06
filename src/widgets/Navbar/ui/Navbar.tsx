import cls from './Navbar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Header } from '@/widgets/Header';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header table="table5" />
    </div>
  );
};
