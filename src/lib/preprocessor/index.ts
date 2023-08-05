interface Preprocessor {
  preprocess: (text: string) => string
}

// TODO: テキストに対する前処理を実装する
export const preprocessor: Preprocessor = {
  preprocess(text: string): string {
    // 全角スペースを削除し、特殊文字を削除
    return text.replace(/ /g, '').replace(/[！？、。]/g, '');
  }
}
