import { sum } from './sum';
import { test, expect } from 'vitest';

test('adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});