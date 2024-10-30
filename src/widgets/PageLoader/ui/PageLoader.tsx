import cls from './PageLoader.module.scss';

import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLoader } from '@/shared/ui/AppLoader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
  <div className={classNames(cls.pageLoader, {}, [className])}>
    <AppLoader />
  </div>
));
