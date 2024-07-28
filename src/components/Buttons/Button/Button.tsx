import styles from './Button.module.scss';

interface ButtonProps {
  txt: string;
  onClick?: () => void;
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button
        className={styles.btn + ' ' + props.className}
        onClick={props.onClick}
        data-testid="button"
      >
        {props.txt}
      </button>
    </>
  );
}

export default Button;
