import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';
import React, { useEffect } from 'react';
import styles from './SearchBar.module.scss';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [query, setQuery, saveQuery] = useLocalStorage(
    LocalStorageKeys.LastQuery
  );

  const handleSearch = () => {
    onSearch(query);
    saveQuery();
  };

  //This will run only during initialization
  useEffect(handleSearch, []);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search query..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (!e.repeat) {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }
          }}
          value={query}
        />
        <button
          className={styles.searchBtn}
          onClick={() => {
            handleSearch();
          }}
        ></button>
      </div>
    </div>
  );
}

export default React.memo(SearchBar);
