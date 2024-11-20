import { StateSchema } from '@/app/providers/StoreProvider';

export const getTable = (state: StateSchema) => state.table.value;
