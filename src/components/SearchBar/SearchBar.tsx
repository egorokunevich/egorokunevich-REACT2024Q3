import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import React from "react";
import ErrorButton from "components/Buttons/ErrorButton/ErrorButton";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

interface SearchBarState {
  query: string;
}

function SearchBar(props: SearchBarProps) {
  const lastQuery = localStorage.getItem("lastQuery") || "";
  const [state, setState] = useState<SearchBarState>(() => {
    return { query: lastQuery };
  });

  function handleSearch() {
    props.onSearch(state.query);
  }

  // This will run only during initialization
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search query..."
          onChange={(e) => {
            setState({
              query: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (!e.repeat) {
              if (e.key === "Enter") {
                handleSearch();
              }
            }
          }}
          value={state.query}
        />
        <button
          className={styles.searchBtn}
          onClick={() => {
            handleSearch();
          }}
        ></button>
      </div>
      <ErrorButton />
    </div>
  );
}

export default React.memo(SearchBar);
