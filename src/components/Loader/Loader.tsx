import { Component } from "react";
import styles from "./Loader.module.scss";

class Loader extends Component<{}, {}> {
  render() {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <div className={styles.loaderText}>LOADING</div>
      </div>
    );
  }
}

export default Loader;
