import { PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface PageProps {
  className?: string;
}

export const Page = (props: PropsWithChildren<PageProps>) => {
  const { children, className } = props;

  return (
    <section className={classNames('', {}, [className])}>{children}</section>
  );
};
