export const bubbleSort = list => {
  const newList = [...list];
  for (let i = 0; i < newList.length - 1; i++) {
    for (let j = 0; j < newList.length - 1 - i; j++) {
      if (newList[j] > newList[j+1]) {
        [ newList[j], newList[j+1] ] = [ newList[j+1], newList[j] ]
      }
    }
  }
  return newList
}
