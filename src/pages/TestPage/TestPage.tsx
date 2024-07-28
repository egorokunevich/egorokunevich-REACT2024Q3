import styles from './TestPage.module.scss';

const TestPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is a test page</h1>
      <p className={styles.info}>
        It is here to test the router implementation
      </p>
    </div>
  );
};

export default TestPage;
