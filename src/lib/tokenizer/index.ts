interface Tokenizer {
  tokenize: (text: string) => string[]
}

// MEMO: 普通にわかち書き系のライブラリを使ったほうが良さそう
export const tokenizer: Tokenizer = {
  tokenize: (text: string) => text.split(/\s+/),
}
