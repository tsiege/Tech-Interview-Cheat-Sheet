export function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

export function indexOfMinimum(array: number[], startIndex: number): number {
  let minValue = array[startIndex]
  let minIndex = startIndex

  for(let i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minIndex = i
      minValue = array[i]
    }
  }

  return minIndex
}

export function selectionSort(array: number[]): void {
  for(let i = 0; i < array.length; i++) {
    const smallestIndex = indexOfMinimum(array, i)
    if (smallestIndex !== i) {
      swap(array, i, smallestIndex)
    }
  }
}
