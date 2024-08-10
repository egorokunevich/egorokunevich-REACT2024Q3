import { createRange, usePagination } from '@/hooks/usePagination';

const mockProps = [
  {
    pagesCount: 109,
    currentPage: 50,
  },
  {
    pagesCount: 109,
    currentPage: 1,
  },
  {
    pagesCount: 109,
    currentPage: 109,
  },
  {
    pagesCount: 1,
    currentPage: 1,
  },
];

test('createRange returns relevant array', () => {
  expect(createRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(createRange(10, 5)).toStrictEqual([1]);
  expect(createRange(0, 0)).toStrictEqual([1]);
});

test('usePagination returns relevant array', async () => {
  expect(usePagination(mockProps[0])).toStrictEqual([
    1,
    '...',
    48,
    49,
    50,
    51,
    52,
    '...',
    109,
  ]);
  expect(usePagination(mockProps[1])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    '...',
    109,
  ]);
  expect(usePagination(mockProps[2])).toStrictEqual([
    1,
    '...',
    103,
    104,
    105,
    106,
    107,
    108,
    109,
  ]);
  expect(usePagination(mockProps[3])).toStrictEqual([1]);
});
