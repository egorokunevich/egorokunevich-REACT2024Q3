import { useEffect, useState } from 'react';

export enum LocalStorageKeys {
  LastQuery = 'lastQuery',
  LastOffset = 'lastOffset',
}

export default function useLocalStorage(
  key: string,
  initialValue: string | number
) {
  const [value, setValue] = useState<string | number>(
    localStorage.getItem(key) || initialValue
  );

  useEffect(() => {
    //Save value on component unmount
    return () => {
      localStorage.setItem(key, value.toString());
    };
  }, []);

  // Update localStorage
  const saveValue = (newValue?: string | number) => {
    if (newValue || newValue === 0) {
      localStorage.setItem(key, newValue.toString());
    } else {
      localStorage.setItem(key, value.toString());
    }
  };

  return [value, setValue, saveValue] as const;
}
