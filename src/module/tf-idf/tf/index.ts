
import { division } from "@utils/index"
import { wakachigaki } from "@utils/wakachigaki"

interface TermFrequency {
  (term: string, document: string): number
}

export const termFrequency: TermFrequency = (term, document) => {
  const words = wakachigaki(document)
  const termCount = words.filter(word => word === term).length
  const wordCount = words.length

  const result = division(termCount, wordCount)

  if (result === null) return 0

  return result
}
