import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LOCALSTORAGE_TABLE_KEY } from '@/shared/const/localstorage';

export function useInit(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_TABLE_KEY, pathname.slice(1));
  }, []);
}
