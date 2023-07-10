import { test, expect } from 'vitest'
import { division } from '.'

test('numerator or denominator is null', () => {
  expect(division(null, null)).toBeNull()
  expect(division(null, 10)).toBeNull()
  expect(division(10, null)).toBeNull()
})

test('denominator is zero', () => {
  expect(division(10, 0)).toBeNull()
})

test('numerator and denominator are valid numbers', () => {
  expect(division(10, 2)).toBe(5)
  expect(division(0, 10)).toBe(0)
})

test('denominator is a negative number', () => {
  expect(division(10, -2)).toBe(-5)
})

test('numerator and denominator are negative numbers', () => {
  expect(division(-10, -2)).toBe(5)
})

test('numerator is a negative number', () => {
  expect(division(-10, 2)).toBe(-5)
})
