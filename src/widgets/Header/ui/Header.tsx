import cls from './Header.module.scss';

import { useTranslation } from 'react-i18next';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppText } from '@/shared/ui/AppText';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemSwitcher } from '@/widgets/ThemSwitcher';
import { useTable } from '@/shared/lib/hooks/useTable/useTable';

interface HeaderProps {
  className?: string;
  logo: string | null;
}

export const Header = (props: HeaderProps) => {
  const { t } = useTranslation();
  const { className, logo } = props;
  const table = useTable();

  return (
    <div
      data-testid="header"
      className={classNames(cls.header, {}, [className])}
    >
      <AppContainer>
        <AppText theme="primary_inverted" title={logo} size="size_l" />
        <AppText
          theme="primary_inverted"
          title="|"
          size="size_l"
          className={cls.separator}
        />
        <AppText theme="primary_inverted" title={`${t('table')} ${table}`} />
        <LangSwitcher className={cls.selectLang} />
        <ThemSwitcher className={cls.selectTheme} />
      </AppContainer>
    </div>
  );
};
