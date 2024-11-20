import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface DishesListProps {
  className?: string;
}

export const DishesList = memo(({ className }: DishesListProps) => {
  return <div className={classNames('', {}, [className])}></div>;
});
