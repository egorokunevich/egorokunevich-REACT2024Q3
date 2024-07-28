import { usePagination } from 'hooks/usePagination';
import styles from './Pagination.module.scss';
import PageButton from './PageButton';
import { GetPagesCount } from 'utils/GetPagesCount';
import PokeApi from '@/api/PokeApi';
import { useFetching } from 'hooks/useFetching';
import { useEffect } from 'react';
import Loader from 'components/Loader';

export interface PaginationProps {
  limit: number;
  currentPage: number;
  handleClick: (pageNumber: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { limit, currentPage, handleClick } = props;
  const {
    fetchFunction: getPagination,
    isLoading: isPaginationLoading,
    results: paginationResults,
  } = useFetching(async () => PokeApi.getPaginationData());

  const paginationRange = usePagination({
    pagesCount: GetPagesCount(limit, paginationResults!),
    currentPage,
  });

  useEffect(() => {
    getPagination();
  }, []);

  if (isPaginationLoading === 'loading' || !paginationResults) {
    return <Loader />;
  }

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
