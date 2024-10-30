import cls from './AppCard.module.scss';

import { HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppCardTheme = 'normal' | 'outlined';

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: AppCardTheme;
}

export const AppCard = (props: PropsWithChildren<AppCardProps>) => {
  const { className, children, theme = 'normal', ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={classNames(cls.appCard, {}, [className, cls[theme]])}
    >
      {children}
    </div>
  );
};
