import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counter';

describe('couunterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('decrement', () => {
    const state: CounterSchema = {
      value: 40,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 39,
    });
  });

  test('with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
