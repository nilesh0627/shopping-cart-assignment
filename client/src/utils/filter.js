export function filter(array = [], id) {
  return array.filter((item) => item.category === id);
}
