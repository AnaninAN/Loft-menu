import cls from './Header.module.scss';

import { useTranslation } from 'react-i18next';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppText } from '@/shared/ui/AppText';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemSwitcher } from '@/widgets/ThemSwitcher';
import { Table } from '@/shared/types/tables';

interface HeaderProps {
  className?: string;
  table: Table;
}

export const Header = (props: HeaderProps) => {
  const { className, table } = props;
  const { t } = useTranslation('translation');

  const tableTranslate: Record<Table, string> = {
    table1: t('table1'),
    table2: t('table2'),
    table3: t('table3'),
    table4: t('table4'),
    table5: t('table5'),
  };

  return (
    <div
      data-testid="header"
      className={classNames(cls.header, {}, [className])}
    >
      <AppContainer>
        <AppText
          theme="primary_inverted"
          title="Loft BAR"
          size="size_l"
          className={cls.logo}
        />
        <AppText
          theme="primary_inverted"
          title="|"
          size="size_l"
          className={cls.separator}
        />
        <AppText
          theme="primary_inverted"
          title={tableTranslate[table]}
          className={cls.table}
        />
        <LangSwitcher className={cls.selectLang} />
        <ThemSwitcher className={cls.selectTheme} />
      </AppContainer>
    </div>
  );
};
