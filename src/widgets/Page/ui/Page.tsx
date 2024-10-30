import { PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppPageProps {
  className?: string;
}

export const Page = (props: PropsWithChildren<AppPageProps>) => {
  const { children, className } = props;

  return (
    <section className={classNames('', {}, [className])}>{children}</section>
  );
};
