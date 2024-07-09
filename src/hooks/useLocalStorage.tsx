import { useEffect, useState } from "react";

export enum LocalStorageKeys {
  LastQuery = "lastQuery",
}

export default function useLocalStorage(key: string) {
  const [query, setQuery] = useState<string>(localStorage.getItem(key) || "");

  useEffect(() => {
    //Save query on component unmount
    return () => {
      console.log("Component UNMOUNT");
      localStorage.setItem(key, query);
    };
  }, []);

  // Update localStorage
  const saveQuery = () => {
    localStorage.setItem(key, query);
  };

  return [query, setQuery, saveQuery] as const;
}
