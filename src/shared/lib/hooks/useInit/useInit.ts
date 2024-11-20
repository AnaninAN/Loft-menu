import { LOCALSTORAGE_TABLE_KEY } from '@/shared/const/localstorage';

export interface UseInitProps {
  id: string | undefined;
}

export function useInit({ id }: UseInitProps): void {
  id && localStorage.setItem(LOCALSTORAGE_TABLE_KEY, id);
}
