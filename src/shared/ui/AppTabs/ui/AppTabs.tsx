import cls from './AppTabs.module.scss';

import { ReactNode, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppCard } from '../../AppCard';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface AppTabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <T>(c: T) => T = memo;

export const AppTabs = typedMemo(<T extends string>(props: AppTabsProps<T>) => {
  const { className, onTabClick, tabs, value } = props;

  const onClickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.appTabs, {}, [className])}>
      {tabs.map((tab) => (
        <AppCard
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? 'normal' : 'outlined'}
          onClick={onClickHandle(tab)}
        >
          {tab.content}
        </AppCard>
      ))}
    </div>
  );
});
