import { Component } from "react";
import styles from "./SearchBar.module.scss";
import React from "react";
import ErrorButton from "components/Buttons/ErrorButton/ErrorButton";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

interface SearchBarState {
  query: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery) {
      this.state = { query: lastQuery };
    } else {
      this.state = { query: "" };
    }
    this.handleSearch();
  }

  handleSearch() {
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search query..."
            onChange={(e) => {
              this.setState({
                query: e.target.value,
              });
            }}
            onKeyDown={(e) => {
              if (!e.repeat) {
                if (e.key === "Enter") {
                  this.handleSearch();
                }
              }
            }}
            value={this.state.query}
          />
          <button
            className={styles.searchBtn}
            onClick={() => {
              this.handleSearch();
            }}
          ></button>
        </div>
        <ErrorButton />
      </div>
    );
  }
}

export default React.memo(SearchBar);
