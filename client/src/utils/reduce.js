export function reduce(array, total) {
  return array.reduce(
    (total, item) => total + item.price * item.quantity,
    total
  );
}
