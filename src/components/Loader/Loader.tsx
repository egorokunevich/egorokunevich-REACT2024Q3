import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.loaderContainer} data-testid="loader">
      <div className={styles.loader}></div>
      <div className={styles.loaderText}>LOADING</div>
    </div>
  );
}

export default Loader;
