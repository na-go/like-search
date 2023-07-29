import { termFrequency } from '.';
import { describe, test, expect } from 'vitest';

describe("termFrequency", () => {
  test("文書内に用語が存在する場合、正しい用語頻度を返すこと", () => {
    const document = "これはサンプルの文書です。同じ単語が繰り返されています。これは文書です。"
    const term = "文書"

    const result = termFrequency(term, document)

    expect(result).toEqual(0.1) // 期待される用語頻度: 1 / 10 = 0.1
  })

  test("文書内に用語が存在しない場合、0を返すこと", () => {
    const document = "これはサンプルの文書です。同じ単語が繰り返されています。これは文書です。"
    const term = "単語"

    const result = termFrequency(term, document)

    expect(result).toEqual(0)
  })
})
