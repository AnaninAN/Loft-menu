import { useSelector } from 'react-redux';

import { AppButton } from '@/shared/ui/AppButton';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <AppButton
        theme="background_inverted"
        onClick={increment}
        data-testid="increment-btn"
        // eslint-disable-next-line i18next/no-literal-string
      >
        increment
      </AppButton>
      <AppButton
        theme="background_inverted"
        onClick={decrement}
        data-testid="decrement-btn"
        // eslint-disable-next-line i18next/no-literal-string
      >
        decrement
      </AppButton>
    </div>
  );
};
