import { GetPagesCount } from 'components/utils/GetPagesCount';
import { usePagination } from 'hooks/usePagination';
import styles from './Pagination.module.scss';
import PageButton from './PageButton';

export interface PaginationProps {
  limit: number;
  totalCount: number;
  currentPage: number;
  handleClick: (pageNumber: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { limit, totalCount, currentPage, handleClick } = props;
  const pagesCount = GetPagesCount(limit, totalCount);
  const paginationRange = usePagination({
    pagesCount,
    currentPage,
  });

  console.log('current page', currentPage);
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {paginationRange?.map((item) => (
          <PageButton
            key={Math.random()}
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
