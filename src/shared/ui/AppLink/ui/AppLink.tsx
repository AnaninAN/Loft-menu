import cls from './AppLink.module.scss';

import { memo, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppLinkTheme =
  | 'primary'
  | 'primary_inverted'
  | 'secondary'
  | 'secondary_inverted'
  | 'red';

type AppLinkView = 'line' | 'button';

interface AppLinkProps {
  className?: string;
  theme?: AppLinkTheme;
  view?: AppLinkView;
  link?: boolean;
  children?: ReactNode;
  to?: To;
  onClick?: () => void;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to = '',
    className,
    children,
    theme = 'primary',
    view = 'line',
    link = true,
    onClick,
  } = props;

  return link ? (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [
        className,
        cls[theme],
        cls[view],
      ])}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <div
      className={classNames(cls.applink, {}, [
        className,
        cls[theme],
        cls[view],
      ])}
      onClick={onClick}
    >
      {children}
    </div>
  );
});
