import { LOCALSTORAGE_TABLE_KEY } from '@/shared/const/localstorage';

export function useTable(): string | null {
  const table = localStorage.getItem(LOCALSTORAGE_TABLE_KEY);

  return table;
}
