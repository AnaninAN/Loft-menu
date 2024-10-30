import cls from './AppText.module.scss';

import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppTextTheme = 'primary' | 'primary_inverted' | 'error';
type AppTextAlign = 'right' | 'left' | 'center';
type AppTextVerticalAlign = 'v_start' | 'v_center' | 'v_end';
type AppTextSize = 'size_m' | 'size_l';

export interface AppTextProps {
  className?: string;
  title?: string | null;
  text?: string;
  theme?: AppTextTheme;
  align?: AppTextAlign;
  verticalAlign?: AppTextVerticalAlign;
  size?: AppTextSize;
}

export const AppText = memo((props: AppTextProps) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    verticalAlign = 'v_center',
    size = 'size_m',
  } = props;

  const classes = [
    className,
    cls[theme],
    cls[align],
    cls[verticalAlign],
    cls[size],
  ];

  return (
    <div className={classNames(cls.appText, {}, classes)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
