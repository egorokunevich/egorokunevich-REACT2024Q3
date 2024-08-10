import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';
import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [query, , saveQuery] = useLocalStorage(LocalStorageKeys.LastQuery, '');
  const [searchParam, setSearchParam] = useState(query ? query.toString() : '');
  const router = useRouter();
  const params = useSearchParams();
  const handleSearch = () => {
    saveQuery(searchParam);
    const page = params.get('page') ? params.get('page') : 1;
    router.push(`?page=${page}${searchParam ? `&search=${searchParam}` : ''}`);
    onSearch(searchParam);
  };

  useEffect(() => {
    setSearchParam(query.toString());
    const page = params.get('page') ? params.get('page') : 1;
    router.push(`?page=${page}${query ? `&search=${query}` : ''}`);
  }, [query]);

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
          data-testid="search-btn"
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
