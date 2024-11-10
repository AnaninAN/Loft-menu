import cls from './Navbar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTable } from '@/shared/lib/hooks/useTable/useTable';
import { Header } from '@/widgets/Header';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const table = useTable();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header table={table} />
    </div>
  );
};
