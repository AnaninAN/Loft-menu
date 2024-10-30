import cls from './AppLoader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const AppLoader = ({ className }: LoaderProps) => (
  <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
