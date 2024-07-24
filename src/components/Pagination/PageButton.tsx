import styles from './Pagination.module.scss';
import '@/theme/colorConstants.scss';

interface PageButtonProps {
  txt: string;
  isActive: boolean;
  handleClick: (pageNumber: number) => void;
}

const PageButton = (props: PageButtonProps) => {
  const { txt, isActive, handleClick } = props;
  return (
    <button
      className={styles.pageBtn}
      style={{
        color: isActive ? 'var(--bg-color)' : 'var(--primary-color)',
        backgroundColor: isActive ? 'var(--primary-color)' : 'var(--bg-color)',
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (+txt) {
          handleClick(+txt);
        }
      }}
    >
      {txt}
    </button>
  );
};

export default PageButton;
