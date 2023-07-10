export function division(numerator: null, denominator: null): null
export function division(numerator: null, denominator: number): null
export function division(numerator: number, denominator: null): null
export function division(numerator: number | null, denominator: number | null): number | null
export function division(numerator: number | null, denominator: number | null): number | null {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') return null
  if (denominator === 0) return null

  return numerator / denominator
}
