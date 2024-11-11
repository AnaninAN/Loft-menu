import cls from './AppButton.module.scss';

import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppButtonTheme =
  | 'clear'
  | 'clear_inverted'
  | 'outline'
  | 'outline_red'
  | 'background'
  | 'background_inverted';

type AppButtonSize = 'size_m' | 'size_l' | 'size_xl';

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: AppButtonTheme;
  square?: boolean;
  close?: boolean;
  size?: AppButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const AppButton = memo((props: AppButtonProps) => {
  const {
    className,
    children,
    theme = 'clear',
    square,
    disabled,
    size = 'size_m',
    close = false,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        cls.appButton,
        { [cls.square]: square, [cls.disabled]: disabled, [cls.close]: close },
        [className, cls[theme], cls[size]]
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
