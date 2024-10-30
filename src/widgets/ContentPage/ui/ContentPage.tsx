import cls from './ContentPage.module.scss';

import { PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppContentPageProps {
  className?: string;
}

export const ContentPage = (props: PropsWithChildren<AppContentPageProps>) => {
  const { children, className } = props;

  return (
    <section className={classNames(cls.appContentPage, {}, [className])}>
      <div className={cls.contentPageHeader}></div>
      {children}
      <div className={cls.contentPageFooter}></div>
    </section>
  );
};
