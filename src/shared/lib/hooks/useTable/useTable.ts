import { useSelector } from 'react-redux';

import { getTable } from '@/entities/Table/model/selectors/getTable/getTable';

export function useTable(): string | undefined {
  const table = useSelector(getTable);

  return table;
}
