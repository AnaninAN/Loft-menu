import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: PropsWithChildren<StoreProviderProps>) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
