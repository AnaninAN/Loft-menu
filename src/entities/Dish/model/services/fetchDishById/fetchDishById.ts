import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Dish } from '../../types/dish';

export const fetchDishById = createAsyncThunk<
  Dish,
  string,
  ThunkConfig<string>
>('Dish/fetchDishById', async (idDish, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Dish>(`/dishes/${idDish}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (e: any) {
    return rejectWithValue('error');
  }
});
