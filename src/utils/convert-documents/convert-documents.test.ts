import { convertToDocuments } from '.'
import type { Tokenizer } from '../tokenizer'
import { describe, it, expect } from 'vitest'

// Tokenizerのモック
const mockTokenizer: Tokenizer<string> = (text: string) => text.split(' ')

describe('convertToDocuments', () => {
  it('should convert string array to Documents', () => {
    const input = ['Document 1 content', 'Document 2 content']
    const expected = [
      { title: 'Document 0', sentence: ['Document', '1', 'content'] },
      { title: 'Document 1', sentence: ['Document', '2', 'content'] },
    ]
    expect(convertToDocuments(input, mockTokenizer)).toEqual(expected)
  })

  it('should convert object array with title and sentence to Documents', () => {
    const input = [
      { title: 'Title 1', sentence: 'Document 1 content' },
      { title: 'Title 2', sentence: 'Document 2 content' },
    ]
    const expected = [
      { title: 'Title 1', sentence: ['Document', '1', 'content'] },
      { title: 'Title 2', sentence: ['Document', '2', 'content'] },
    ]
    expect(convertToDocuments(input, mockTokenizer)).toEqual(expected)
  })
})
