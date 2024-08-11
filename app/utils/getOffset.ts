import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';

export const getOffset = (currentPage: number, limit: number = PAGE_LIMIT) =>
  Math.ceil((currentPage - 1) * limit);
