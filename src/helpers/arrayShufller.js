export function shuffleArray(array) {

    const newArr = array.filter(e => e !== 'BORDER');

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
    newArr.splice(4, 0, 'BORDER');
    newArr.splice(14, 0, 'BORDER');
    newArr.splice(9, 0, 'BORDER');
  return newArr
}
