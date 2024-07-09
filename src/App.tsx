import { Component } from "react";
import "./App.css";
import SearchPage from "./pages/SearchPage/SearchPage";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchPage />
      </ErrorBoundary>
    );
  }
}

export default App;
