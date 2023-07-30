import { idf } from '.'
import { describe, expect, test } from 'vitest'

describe('idf', () => {
  test('idf', () => {
    expect(idf('a', ['a b c', 'a a a'])).toBe(0)
    expect(idf('a', ['a b c', 'b b b'])).toBe(0.6931471805599453)
    expect(idf('a', ['a b c', 'a b c'])).toBe(0)
  })
})
