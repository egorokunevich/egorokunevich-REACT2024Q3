import { Component } from "react";
import styles from "./ErrorButton.module.scss";

interface ErrorButtonState {
  throwError: boolean;
}

class ErrorButton extends Component<{}, ErrorButtonState> {
  state: ErrorButtonState = { throwError: false };

  handleClick() {
    this.setState({ throwError: true });
  }

  throwError() {
    if (this.state.throwError) {
      throw new Error();
    }
  }

  render() {
    this.throwError();
    return (
      <>
        <button className={styles.errorBtn} onClick={() => this.handleClick()}>
          Throw error
        </button>
      </>
    );
  }
}

export default ErrorButton;
