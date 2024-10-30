import cls from './AppContainer.module.scss';

import { PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppContainerProps {
  className?: string;
}

export const AppContainer = ({
  children,
  className,
}: PropsWithChildren<AppContainerProps>) => {
  return (
    <div className={classNames(cls.appContainer, {}, [className])}>
      {children}
    </div>
  );
};
