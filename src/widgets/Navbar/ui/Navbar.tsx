import cls from './Navbar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Header } from '@/widgets/Header';
import { LOGO } from '@/shared/const/const';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const logo = LOGO;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header logo={logo} />
    </div>
  );
};
