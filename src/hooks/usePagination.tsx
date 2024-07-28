// import { useMemo } from 'react';

export const createRange = (start: number, end: number) => {
  if (end <= start) {
    return [1];
  }
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

export interface PaginationProps {
  pagesCount: number;
  currentPage: number;
}

const PAGE_BTNS_MIN_COUNT = 5; // The minimum amount of displayed buttons
const SELECTED_BTN_SIBLINGS_COUNT = 2; // The number of buttons near current button. Should be at least 1

export const usePagination = (props: PaginationProps) => {
  const { pagesCount, currentPage } = props;
  // const paginationRange = useMemo(() => {
  const paginationRange = () => {
    const pageBtnsCount = SELECTED_BTN_SIBLINGS_COUNT + PAGE_BTNS_MIN_COUNT;

    if (pageBtnsCount >= pagesCount) {
      return createRange(1, pagesCount);
    }

    const leftSiblingIndex = Math.max(
      currentPage - SELECTED_BTN_SIBLINGS_COUNT,
      1
    );
    const rightSiblingIndex = Math.min(
      currentPage + SELECTED_BTN_SIBLINGS_COUNT,
      pagesCount
    );

    const shouldShowLeftDots = leftSiblingIndex > SELECTED_BTN_SIBLINGS_COUNT;
    const shouldShowRightDots =
      rightSiblingIndex < pagesCount - SELECTED_BTN_SIBLINGS_COUNT;

    const firstPageIndex = 1;
    const lastPageIndex = pagesCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount =
        3 + SELECTED_BTN_SIBLINGS_COUNT * SELECTED_BTN_SIBLINGS_COUNT;
      const leftRange = createRange(1, leftItemCount);

      return [...leftRange, '...', pagesCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount =
        3 + SELECTED_BTN_SIBLINGS_COUNT * SELECTED_BTN_SIBLINGS_COUNT;
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
  };
  // }, [pagesCount, currentPage]);
  return paginationRange();
};
