import Link from 'next/link';
import styles from './Pagination.module.scss';

interface PageButtonProps {
  txt: string;
  isActive: boolean;
  handleClick: (pageNumber: number) => void;
}

const PageButton = (props: PageButtonProps) => {
  const { txt, isActive, handleClick } = props;
  return (
    // <button
    //   className={styles.pageBtn}
    //   style={{
    //     color: isActive ? 'var(--bg-color)' : 'var(--primary-color)',
    //     backgroundColor: isActive ? 'var(--primary-color)' : 'var(--bg-color)',
    //   }}
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     if (+txt) {
    //       handleClick(+txt);
    //     }
    //   }}
    //   data-testid="page-btn"
    // >
    //   {txt}
    // </button>
    <Link
      href={`?page=${+txt}`}
      className={styles.pageBtn}
      style={{
        color: isActive ? 'var(--bg-color)' : 'var(--primary-color)',
        backgroundColor: isActive ? 'var(--primary-color)' : 'var(--bg-color)',
      }}
      data-testid="page-btn"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {txt}
    </Link>
  );
};

export default PageButton;
