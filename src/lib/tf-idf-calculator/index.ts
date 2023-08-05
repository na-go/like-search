export type TFIDFResult = Record<string, number>

export type DocumentWithId = {
  id: string
  words: string[]
}

interface TFIDFCalculator {
  compute: (documents: DocumentWithId[]) => { id: string; tfidf: TFIDFResult }[]
  computeForWord: (word: string, documents: DocumentWithId[]) => { id: string; tfidf: number }[]
}

export const computeTF = (term: string, document: string[]): number => {
  const termCount = document.filter((word) => word === term).length
  return termCount / document.length
}

export const computeIDF = (term: string, documents: string[][]): number => {
  const totalNumberOfDocuments = documents.length
  const documentFrequency = documents.filter((document) => document.includes(term)).length
  return Math.log(totalNumberOfDocuments / documentFrequency)
}

const compute = (documentsWithIds: DocumentWithId[]): { id: string; tfidf: TFIDFResult }[] => {
  const uniqueWords = Array.from(new Set(documentsWithIds.flatMap((doc) => doc.words)))
  return documentsWithIds.map((documentWithId) => {
    const result: TFIDFResult = {}
    uniqueWords.forEach((word) => {
      const tf = computeTF(word, documentWithId.words)
      const idf = computeIDF(
        word,
        documentsWithIds.map((doc) => doc.words)
      )
      result[word] = tf * idf
    })
    return { id: documentWithId.id, tfidf: result }
  })
}

// 特定の単語に対してTF-IDF値を計算
const computeForWord = (
  term: string,
  documentsWithIds: DocumentWithId[]
): { id: string; tfidf: number }[] => {
  const tfidfResults = compute(documentsWithIds)
  return tfidfResults.map((result) => ({ id: result.id, tfidf: result.tfidf[term] }))
}

const tfidfCalculator: TFIDFCalculator = {
  compute,
  computeForWord,
}

export default tfidfCalculator
