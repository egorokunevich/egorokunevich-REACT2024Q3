import { useState } from "react";
import styles from "./ErrorButton.module.scss";

interface ErrorButtonState {
  throwError: boolean;
}

function ErrorButton() {
  const [state, setState] = useState<ErrorButtonState>({ throwError: false });

  function handleClick() {
    setState({ throwError: true });
  }

  function throwError() {
    if (state.throwError) {
      throw new Error();
    }
  }

  return (
    <>
      {throwError()}
      <button className={styles.errorBtn} onClick={() => handleClick()}>
        Throw error
      </button>
    </>
  );
}

export default ErrorButton;
