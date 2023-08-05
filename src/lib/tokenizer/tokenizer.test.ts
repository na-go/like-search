import { tokenizer } from '.'
import { describe, it, expect } from 'vitest'

describe('SimpleTokenizer', () => {
  it('should tokenize text by splitting on whitespace', () => {
    const text = 'apple banana orange'
    const result = tokenizer.tokenize(text)
    const expected = ['apple', 'banana', 'orange']
    expect(result).toEqual(expected)
  })

  it('should handle multiple spaces and trim', () => {
    const text = 'apple  banana   orange'
    const result = tokenizer.tokenize(text)
    const expected = ['apple', 'banana', 'orange']
    expect(result).toEqual(expected)
  })
})
