import cls from './Footer.module.scss';

import { memo } from 'react';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Menu } from '@/widgets/Menu';

interface FooterProps {
  className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {
  return (
    <div className={classNames(cls.footer, {}, [className])}>
      <AppContainer>
        <Menu />
      </AppContainer>
    </div>
  );
});
