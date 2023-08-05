interface Preprocessor {
  preprocess: (text: string) => string
}

// TODO: テキストに対する前処理を実装する
export const preprocessor: Preprocessor = {
  preprocess: (text: string) => text.toLowerCase(),
}
