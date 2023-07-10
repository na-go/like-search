import { tokenize } from "wakachigaki/lib/types/tokenize"

interface Wakachigaki {
  (text: string): string[]
}

export const wakachigaki: Wakachigaki = (text) => {
  return tokenize(text)
}
