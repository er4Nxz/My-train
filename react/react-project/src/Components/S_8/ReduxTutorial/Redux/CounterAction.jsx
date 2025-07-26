export const inc = "inc";
export const dec = "dec";
export const reset = "reset";
export function inc() {
  return { type: inc };
}
export function dec() {
  return { type: dec };
}
export function reset() {
  return { type: reset };
}
