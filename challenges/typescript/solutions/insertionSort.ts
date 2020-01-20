export function insert(array: number[], rightIndex: number, value: number): void {
  let cursor = rightIndex
  for(cursor; cursor >= 0 && array[cursor] > value; cursor--) {
    array[cursor + 1] = array[cursor]
  }
  array[cursor + 1] = value
}

export function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
      insert(array, i - 1, array[i])
  }
}
