import { Component } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  txt: string;
  onClick?: () => void;
  className?: string;
}

class Button extends Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <>
        <button
          className={styles.btn + " " + this.props.className}
          onClick={this.props.onClick}
        >
          {this.props.txt}
        </button>
      </>
    );
  }
}

export default Button;
