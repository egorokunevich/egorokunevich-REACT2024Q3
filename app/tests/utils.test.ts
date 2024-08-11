import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { getPagesCount } from '@/utils/getPagesCount';

test('Capitalize first letter', () => {
  expect(capitalizeFirstLetter('asd')).toBe('Asd');
  expect(capitalizeFirstLetter('')).toBe('');
  expect(capitalizeFirstLetter(' ')).toBe(' ');
});

test('Get pages count', () => {
  expect(getPagesCount(12, 13)).toBe(2);
  expect(getPagesCount(1, 10)).toBe(10);
  expect(getPagesCount(2000, 2)).toBe(1);
});
