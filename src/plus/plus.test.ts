import { plus } from '.'
import { describe, it, expect } from 'vitest'

describe('plus', () => {
  it('adds two numbers', () => {
    expect(plus(1, 2)).toEqual(3)
  })
})
