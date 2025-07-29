export const incCounter = "incCounter";
export const decCounter = "decCounter";
export const resetCounter = "resetCounter";
export function incFuncCounter() {
  return { type: incCounter, payload: 1 };
}
export function decFuncCounter() {
  return { type: decCounter, payload: 1 };
}
export function resetFuncCounter() {
  return { type: resetCounter };
}
