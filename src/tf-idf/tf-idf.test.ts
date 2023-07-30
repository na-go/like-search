import { tfidf } from '.'
import { describe, expect, test } from 'vitest'

describe('tfidf', () => {
  test('tfidf', () => {
    expect(tfidf('a', 'a b c', ['a b c', 'a a a'])).toBe(0)
    expect(tfidf('a', 'a b c', ['a b c', 'b b b'])).toBe(0.23104906018664842)
    expect(tfidf('a', 'a b c', ['a b c', 'a b c'])).toBe(0)
    expect(tfidf('a', 'a b c', ['a b c', 'a b c', 'a b c'])).toBe(0)
    expect(tfidf('a', 'a b c', ['a b c', 'a b c', 'a b c', 'a b c'])).toBe(0)
    expect(tfidf('a', 'a b c', ['a b c', 'a b c', 'a b c', 'a b c', 'a b c'])).toBe(0)
    expect(tfidf('a', 'a b c', ['a b c', 'a b c', 'a b c', 'a b c', 'a b c', 'a b c'])).toBe(0)
    expect(
      tfidf('a', 'a b c', ['a b c', 'a b c', 'a b c', 'a b c', 'a b c', 'a b c', 'a b c'])
    ).toBe(0)
  })
})
