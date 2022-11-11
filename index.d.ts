export type Cloze = {
  c: number,
  answer: string,
  hint: string
}
export type ClozeResult = (string | Cloze)[]
export function cloze(str: string): ClozeResult
