import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { getOffset } from '@/utils/getOffset';
import { getPagesCount } from '@/utils/getPagesCount';

test('Capitalize first letter', () => {
  expect(capitalizeFirstLetter('asd')).toBe('Asd');
  expect(capitalizeFirstLetter('')).toBe('');
  expect(capitalizeFirstLetter(' ')).toBe(' ');
});

test('Get pages count', () => {
  expect(getPagesCount(13, 12)).toBe(2);
  expect(getPagesCount(10, 1)).toBe(10);
  expect(getPagesCount(2, 2000)).toBe(1);
});

test('Get offset', () => {
  expect(getOffset(1, 12)).toBe(0);
  expect(getOffset(50, 12)).toBe(588);
  expect(getOffset(-2, 12)).toBe(0);
});
