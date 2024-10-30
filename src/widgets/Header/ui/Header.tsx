import cls from './Header.module.scss';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppText } from '@/shared/ui/AppText';
import { LangSwitcher } from '@/widgets/LangSwitcher';

interface HeaderProps {
  className?: string;
  table: string;
}

export const Header = (props: HeaderProps) => {
  const { className, table } = props;

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <AppContainer>
        <AppText title="Loft BAR" size="size_l" className={cls.logo} />
        <AppText title="|" size="size_l" className={cls.separator} />
        <AppText title={table} className={cls.table} />
        <LangSwitcher className={cls.select} />
      </AppContainer>
    </div>
  );
};
