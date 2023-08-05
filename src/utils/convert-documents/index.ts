import type { Tokenizer } from '../tokenizer'

export type Document = {
  title: string
  sentence: string[]
}

type InputDocument<T> = T extends string ? string : { title: string; sentence: string }

export const convertToDocuments = <T extends string | { title: string; sentence: string }>(
  documents: InputDocument<T>[],
  tokenizer: Tokenizer<string>
): Document[] => {
  return documents.map((document, index) =>
    typeof document === 'string'
      ? { title: `Document ${index}`, sentence: tokenizer(document) }
      : { title: document.title, sentence: tokenizer(document.sentence) }
  )
}
