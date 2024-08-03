'use client';

import { useEffect } from 'react';

export enum TabTitles {
  PokemonWiki = 'Pokemon Wiki',
  NotFound = '404 Not Found',
  Empty = '',
}

export const useTabTitle = (title: TabTitles, info?: string) => {
  useEffect(() => {
    document.title = info ? title + ' ' + info : title;
  }, []);
};

export default useTabTitle;
