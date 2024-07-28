export enum TabTitles {
  PokemonWiki = 'Pokemon Wiki',
  NotFound = '404 Not Found',
  Empty = '',
}

export const useTabTitle = (title: TabTitles, info?: string) => {
  document.title = info ? title + ' ' + info : title;
};

export default useTabTitle;
