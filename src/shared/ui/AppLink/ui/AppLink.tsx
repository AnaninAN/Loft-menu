import cls from './AppLink.module.scss';

import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppLinkTheme =
  | 'primary'
  | 'primary_inverted'
  | 'secondary'
  | 'secondary_inverted'
  | 'red';

type AppLinkView = 'line' | 'button';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  view?: AppLinkView;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = 'primary',
    view = 'line',
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [
        className,
        cls[theme],
        cls[view],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
