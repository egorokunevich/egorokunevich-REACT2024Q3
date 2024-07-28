import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [query, , saveQuery] = useLocalStorage(LocalStorageKeys.LastQuery, '');
  const [searchParam, setSearchParam] = useState(query ? query.toString() : '');

  const handleSearch = () => {
    saveQuery(query);
    onSearch(searchParam);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search query..."
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
          onKeyDown={(e) => {
            if (!e.repeat) {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }
          }}
          value={searchParam}
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
