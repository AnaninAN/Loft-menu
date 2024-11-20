import { TableSchema } from '../types/table';
import { tableActions, tableReducer } from './tableSlice';

describe('tableSlice', () => {
  test('tableSlice', () => {
    const state: TableSchema = {
      value: undefined,
    };

    expect(tableReducer(state, tableActions.init('12'))).toEqual({
      value: '12',
    });
  });
});
