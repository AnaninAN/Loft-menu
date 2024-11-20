import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Dish, DishSchema } from '../types/dish';
import { fetchDishById } from '../services/fetchDishById/fetchDishById';

const initialState: DishSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchDishById.fulfilled,
        (state, action: PayloadAction<Dish>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchDishById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: dishActions } = dishSlice;
export const { reducer: dishReducer } = dishSlice;
