export function swap(arr, indexOfTile) {
  let newArr = [...arr];
  let indexOfHole = newArr.indexOf(0);
  let b = newArr[indexOfTile];
  newArr[indexOfTile] = newArr[indexOfHole];
  newArr[indexOfHole] = b;
  return newArr;
}
