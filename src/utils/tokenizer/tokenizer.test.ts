import { describe, it, expect } from 'vitest'

import { stringTokenizer, arrayTokenizer, objectTokenizer } from '.'

describe('Tokenizers', () => {
  it('should tokenize string correctly', () => {
    expect(stringTokenizer('mika koharu')).toEqual(['mika', 'koharu'])
  })

  it('should tokenize array of strings correctly', () => {
    expect(arrayTokenizer(['mika', 'koharu'])).toEqual(['mika', 'koharu'])
  })
})

describe('objectTokenizer', () => {
  it('should tokenize keys only', () => {
    const tokenizer = objectTokenizer('keys')
    expect(tokenizer({ mika: '☆', koharu: 'エッチなのは駄目！死刑！' })).toEqual(['mika', 'koharu'])
  })

  it('should tokenize values only', () => {
    const tokenizer = objectTokenizer('values')
    expect(tokenizer({ mika: '☆', koharu: 'エッチなのは駄目！死刑！' })).toEqual([
      '☆',
      'エッチなのは駄目！死刑！',
    ])
  })

  it('should tokenize both keys and values', () => {
    const tokenizer = objectTokenizer('both')
    expect(tokenizer({ mika: '☆', koharu: 'エッチなのは駄目！死刑！' })).toEqual([
      'mika',
      '☆',
      'koharu',
      'エッチなのは駄目！死刑！',
    ])
  })

  it('should use both keys and values as default option', () => {
    const tokenizer = objectTokenizer()
    expect(tokenizer({ mika: '☆', koharu: 'エッチなのは駄目！死刑！' })).toEqual([
      'mika',
      '☆',
      'koharu',
      'エッチなのは駄目！死刑！',
    ])
  })
})
