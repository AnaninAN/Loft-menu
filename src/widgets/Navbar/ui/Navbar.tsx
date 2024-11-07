import cls from './Navbar.module.scss';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Table } from '@/shared/types/tables';
import { Header } from '@/widgets/Header';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('translation');

  const tableTranslate: Record<Table, string> = {
    table1: t('table1'),
    table2: t('table2'),
    table3: t('table3'),
    table4: t('table4'),
    table5: t('table5'),
  };

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Header table={tableTranslate['table5']} />
    </div>
  );
};
