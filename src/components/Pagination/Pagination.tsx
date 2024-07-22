import { usePagination } from 'hooks/usePagination';
import styles from './Pagination.module.scss';
import PageButton from './PageButton';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleClick: (pageNumber: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, handleClick } = props;

  const paginationRange = usePagination({
    pagesCount: totalPages,
    currentPage,
  });

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {paginationRange?.map((item, i) => (
          <PageButton
            key={i}
            txt={item.toString()}
            isActive={+item === currentPage}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
