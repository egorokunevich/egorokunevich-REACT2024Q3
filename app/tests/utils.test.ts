import { CapitalizeFirstLetter } from '../utils/CapitalizeFirstLetter';
import { getPagesCount } from '@/utils/getPagesCount';

test('Capitalize first letter', () => {
  expect(CapitalizeFirstLetter('asd')).toBe('Asd');
  expect(CapitalizeFirstLetter('')).toBe('');
  expect(CapitalizeFirstLetter(' ')).toBe(' ');
});

test('Get pages count', () => {
  expect(getPagesCount(12, 13)).toBe(2);
  expect(getPagesCount(1, 10)).toBe(10);
  expect(getPagesCount(2000, 2)).toBe(1);
});
