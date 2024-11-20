import { AxiosInstance } from 'axios';

import { TableSchema } from '@/entities/Table';

export interface StateSchema {
  table: TableSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
