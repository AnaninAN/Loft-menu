import cls from './AppSelect.module.scss';

import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface AppSelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

const typedMemo: <T>(c: T) => T = memo;

export const AppSelect = typedMemo(
  <T extends string>(props: AppSelectProps<T>) => {
    const { className, label, onChange, options, value } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
      () =>
        options?.map((opt) => (
          <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        )),
      [options]
    );

    return (
      <div className={classNames(cls.wrapper, {}, [className])}>
        {label && <span className={cls.label}>{`${label}: `}</span>}
        <select className={cls.select} value={value} onChange={onChangeHandler}>
          {optionsList}
        </select>
      </div>
    );
  }
);
