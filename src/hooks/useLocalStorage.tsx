'use client';

import { useEffect, useState } from 'react';

export enum LocalStorageKeys {
  LastQuery = 'lastQuery',
  LastOffset = 'lastOffset',
}

export default function useLocalStorage(
  key: string,
  initialValue: string | number
) {
  const [value, setValue] = useState<string | number>(initialValue);
  useEffect(() => {
    setValue(localStorage.getItem(key) || initialValue);
  }, []);
  // Update localStorage
  const saveValue = (newValue: string | number) => {
    localStorage.setItem(key, newValue.toString());
  };

  return [value, setValue, saveValue] as const;
}
