import { expect, test } from 'vitest';
import { CapitalizeFirstLetter } from '../utils/CapitalizeFirstLetter.ts';
import { GetPagesCount } from '../utils/GetPagesCount.ts';

test('Capitalize first letter', () => {
  expect(CapitalizeFirstLetter('asd')).toBe('Asd');
  expect(CapitalizeFirstLetter('')).toBe('');
  expect(CapitalizeFirstLetter(' ')).toBe(' ');
});

test('Get pages count', () => {
  expect(GetPagesCount(12, 13)).toBe(2);
  expect(GetPagesCount(1, 10)).toBe(10);
  expect(GetPagesCount(2000, 2)).toBe(1);
});
