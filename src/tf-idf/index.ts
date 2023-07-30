import { tf } from './tf'
import { idf } from './idf'

type TFIDF = (term: string, doc: string, docs: string[]) => number

export const tfidf: TFIDF = (term, doc, docs) => {
  return tf(term, doc) * idf(term, docs)
}
