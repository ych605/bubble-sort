export const bubbleSort = list => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j+1]) {
        [ list[j], list[j+1] ] = [ list[j+1], list[j] ] // swap ajacent elements
      }
    }
  }
  return list
}