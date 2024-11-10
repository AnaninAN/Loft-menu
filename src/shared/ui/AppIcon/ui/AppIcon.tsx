import cls from './AppIcon.module.scss';

import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppIconTheme = 'primary' | 'primary_inverted';

interface AppIconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  theme?: AppIconTheme;
}

export const AppIcon = memo((props: AppIconProps) => {
  const { Svg, theme = 'primary', className } = props;

  return (
    <Svg className={classNames(cls.appIcon, {}, [className, cls[theme]])} />
  );
});
