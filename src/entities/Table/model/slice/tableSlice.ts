import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TableSchema } from '../types/table';

const initialState: TableSchema = {
  value: undefined,
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { actions: tableActions } = tableSlice;
export const { reducer: tableReducer } = tableSlice;
