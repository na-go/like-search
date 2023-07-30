type IDF = (term: string, docs: string[]) => number

export const idf: IDF = (term, docs) => {
  const docsLength = docs.length
  const docsFreq = docs.filter((doc) => doc.includes(term)).length
  return Math.log(docsLength / docsFreq)
}
