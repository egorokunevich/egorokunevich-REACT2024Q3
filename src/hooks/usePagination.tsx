import { useMemo } from 'react';

const createRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
}

export const usePagination = (props: PaginationProps) => {
  const { pagesCount, currentPage } = props;
  const paginationRange = useMemo(() => {
    const siblingsCount = 2; // The number of buttons near current button
    // Pages count is determined as siblingsCount + firstPage + lastPage + currentPage + 2*'...'
    const pageBtnsCount = siblingsCount + 5;

    if (pageBtnsCount >= pagesCount) {
      return createRange(1, pagesCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, pagesCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pagesCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pagesCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingsCount;
      const leftRange = createRange(1, leftItemCount);

      return [...leftRange, '...', pagesCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = createRange(
        pagesCount - rightItemCount + 1,
        pagesCount
      );
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createRange(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  }, [pagesCount, currentPage]);
  return paginationRange;
};
