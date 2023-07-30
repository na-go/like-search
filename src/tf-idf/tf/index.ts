type TF = (term: string, doc: string) => number

export const tf: TF = (term, doc) => {
  const termFreq = doc.split(term).length - 1
  const docLength = doc.split(' ').length
  return termFreq / docLength
}
