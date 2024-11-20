import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';
import { $api } from '@/shared/api/api';
import { tableReducer } from '@/entities/Table';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer = {
    table: tableReducer,
  };

  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
