import { Component } from "react";
import styles from "./SearchBar.module.scss";
import React from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

interface SearchBarState {
  query: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = { query: "" };
  }

  handleSearch() {
    this.props.onSearch(this.state.query);

    this.setState({ query: "" });
  }

  render() {
    console.log("render searchBar");
    return (
      <div>
        <input
          type="text"
          placeholder="Search query..."
          onChange={(e) => {
            this.setState({
              query: e.target.value,
            });
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
    );
  }
}

export default React.memo(SearchBar);
