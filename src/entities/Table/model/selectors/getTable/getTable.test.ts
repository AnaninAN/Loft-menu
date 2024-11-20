import { StateSchema } from '@/app/providers/StoreProvider';
import { getTable } from './getTable';

describe('getTable', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      table: {
        value: '12',
      },
    };

    expect(getTable(state as StateSchema)).toEqual('12');
  });
});
