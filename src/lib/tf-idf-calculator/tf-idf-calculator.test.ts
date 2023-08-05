import tfidfCalculator, { computeIDF, computeTF, type DocumentWithId, type TFIDFResult } from '.'
import { describe, it, expect } from 'vitest'

describe('computeTF', () => {
  it('should compute the term frequency for a given term and document', () => {
    const term = 'apple'
    const document = ['apple', 'banana', 'apple', 'orange']

    const result = computeTF(term, document)

    // appleが2回、全体で4単語なので、TFは2 / 4 = 0.5
    expect(result).toBe(0.5)
  })
})

describe('computeIDF', () => {
  it('should compute the inverse document frequency for a given term and document set', () => {
    const term = 'apple'
    const documents = [
      ['apple', 'banana'],
      ['banana', 'orange'],
      ['apple', 'orange'],
    ]

    const result = computeIDF(term, documents)

    // appleが2つの文書に出現、全体で3文書なので、IDFはlog(3 / 2)
    expect(result).toBeCloseTo(Math.log(3 / 2))
  })
})

describe('TFIDFCalculator', () => {
  describe('compute', () => {
    it('should compute TF-IDF values for a set of documents', () => {
      const documentsWithIds: DocumentWithId[] = [
        { id: 'doc1', words: ['apple', 'banana', 'apple'] },
        { id: 'doc2', words: ['banana', 'orange'] },
      ]

      const result = tfidfCalculator.compute(documentsWithIds)

      const uniqueWords = Array.from(new Set(documentsWithIds.flatMap((doc) => doc.words)))
      const expected = documentsWithIds.map((doc) => ({
        id: doc.id,
        tfidf: uniqueWords.reduce<TFIDFResult>((acc, word) => {
          acc[word] =
            computeTF(word, doc.words) *
            computeIDF(
              word,
              documentsWithIds.map((d) => d.words)
            )
          return acc
        }, {}),
      }))

      expect(result).toEqual(expected)
    })
  })

  describe('computeForWord', () => {
    it('should compute the TF-IDF value for a specific word across a set of documents', () => {
      const term = 'apple'
      const documentsWithIds: DocumentWithId[] = [
        { id: 'doc1', words: ['apple', 'banana'] },
        { id: 'doc2', words: ['banana', 'orange'] },
        { id: 'doc3', words: ['apple', 'orange'] },
      ]

      const result = tfidfCalculator.computeForWord(term, documentsWithIds)
      const expected = tfidfCalculator
        .compute(documentsWithIds)
        .map((result) => ({ id: result.id, tfidf: result.tfidf[term] }))

      expect(result).toEqual(expected)
    })
  })
})
