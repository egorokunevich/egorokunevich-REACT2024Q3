import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = () => {
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
          data-testid="search-input"
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
