import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useRouter } from 'next/router';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [query, , saveQuery] = useLocalStorage(LocalStorageKeys.LastQuery, '');
  const [searchParam, setSearchParam] = useState(query ? query.toString() : '');
  const router = useRouter();

  const handleSearch = () => {
    saveQuery(searchParam);
    const page = router.query.page;
    router.push(`?page=${page}${searchParam ? `&search=${searchParam}` : ''}`);
    onSearch(searchParam);
  };

  return (
    <div className={styles.searchWrapper} data-testid="search-bar">
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
        >
          <div
            className={styles.iconMask}
            style={{
              maskImage: 'url(../../../../../assets/icons/search.svg)',
              WebkitMaskImage: 'url(../../../../../assets/icons/search.svg)',
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default React.memo(SearchBar);
