export const incAge = "inc";
export const decAge = "dec";
export const resetAge = "reset";
export function incFuncAge() {
  return {
    type: incAge,
    payload: 1,
  };
}
export function decFuncAge() {
  return {
    type: decAge,
    payload: 1,
  };
}
export function resetFuncAge() {
  return {
    type: resetAge,
  };
}
