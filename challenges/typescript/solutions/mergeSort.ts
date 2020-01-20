/**
 * This challenge is purposefully set up to have `merge` be solved first
 * */
export function merge(array: number[], lowHalfBegin: number, boundary: number, highHalfEnd: number): void {
  const lowHalf: number[] = []
  const highHalf: number[] = []

  let cursor = lowHalfBegin
  // divide the content of the array into two new temporary arrays, lowHalf and highHalf
  for (let i = 0; cursor <= boundary; i++, cursor++) {
    lowHalf[i] = array[cursor]
  }
  for (let i = 0; cursor <= highHalfEnd; i++, cursor++) {
    highHalf[i] = array[cursor]
  }
  /**
   * Repeatedly compare the lowest untaken element in
   * lowHalf with the lowest untaken element in highHalf
   * and copy the lower of the two back into array
   */
  cursor = lowHalfBegin
  let lowHalfCursor = 0
  let highHalfCursor = 0
  while (lowHalfCursor < lowHalf.length && highHalfCursor < highHalf.length) {
    if (lowHalf[lowHalfCursor] < highHalf[highHalfCursor]) {
      array[cursor] = lowHalf[lowHalfCursor]
      lowHalfCursor++
    } else {
      array[cursor] = highHalf[highHalfCursor]
      highHalfCursor++
    }
    cursor++
  }
  /**
   * Once one of lowHalf and highHalf has been fully copied
   * back into array, copy the remaining elements from the
   * other temporary array back into the array
   */
  while (lowHalfCursor < lowHalf.length) {
    array[cursor] = lowHalf[lowHalfCursor]
    cursor++
    lowHalfCursor++
  }
  while (highHalfCursor < highHalf.length) {
    array[cursor] = highHalf[highHalfCursor]
    cursor++
    highHalfCursor++
  }
}


// Takes in an array and recursively merge sorts it
export function mergeSort(array: number[], lowHalfBegin = 0, highHalfEnd = array.length - 1): void {
  if (lowHalfBegin < highHalfEnd){
    const middle = Math.floor((lowHalfBegin + highHalfEnd) / 2)
    mergeSort(array, lowHalfBegin, middle)
    mergeSort(array, middle + 1, highHalfEnd)
    merge(array, lowHalfBegin, middle, highHalfEnd)
  }
}
