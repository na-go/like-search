type TokenizeOption = 'keys' | 'values' | 'both'

export type Tokenizer<T> = (content: T) => string[]

// TODO: わかち書きを導入してTokenizerを作成する
export const stringTokenizer: Tokenizer<string> = (content) => content.split(/\s+/)

// TODO: 文字列の中身が1単語以上の場合に対応する
export const arrayTokenizer: Tokenizer<string[]> = (content) => content

export const objectTokenizer = (
  option: TokenizeOption = 'both'
): Tokenizer<Record<string, string>> => {
  return (content) => {
    switch (option) {
      case 'keys':
        return Object.keys(content)
      case 'values':
        return Object.values(content)
      case 'both':
      default:
        return Object.entries(content).flatMap(([key, value]) => [key, value])
    }
  }
}
