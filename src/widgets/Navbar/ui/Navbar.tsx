import cls from './Navbar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTable } from '@/shared/lib/hooks/useTable/useTable';
import { Header } from '@/widgets/Header';
import { LOGO } from '@/shared/const/const';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const logo = LOGO;
  const table = useTable();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header table={table} logo={logo} />
    </div>
  );
};
