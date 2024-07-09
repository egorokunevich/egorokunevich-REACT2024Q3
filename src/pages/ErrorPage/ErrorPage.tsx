import { Component } from "react";
import styles from "./ErrorPage.module.scss";
import Button from "components/Buttons/Button";

class ErrorPage extends Component<{}, {}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
        <p className={styles.errorInfo}>Please, try to reload the app.</p>
        <Button txt="Reload" onClick={() => window.location.reload()} />
      </div>
    );
  }
}

export default ErrorPage;
