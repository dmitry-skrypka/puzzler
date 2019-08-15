export function swap(arr, index_A) {
  let index_B = arr.indexOf(0);
  let b = arr[index_A];
  arr[index_A] = arr[index_B];
  arr[index_B] = b;
  return arr;
}
