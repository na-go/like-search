import { tf } from '.'
import { describe, expect, test } from 'vitest'

describe('tf', () => {
  test('tf', () => {
    expect(tf('a', 'a b c')).toBe(1 / 3)
    expect(tf('a', 'a a a')).toBe(1)
    expect(tf('a', 'b b b')).toBe(0)
  })
})
