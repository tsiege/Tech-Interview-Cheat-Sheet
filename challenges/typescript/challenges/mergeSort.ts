/**
 * This challenge is purposefully set up to have `merge` be solved first
 * code commented out with // is meant to be used as an aide.
 * if you dont want it simply delete the lines and try for yourself!
 * you can use this regex to delete all those lines /\/\/.+/ with a find and replace in your editor
 * */
export function merge(array: number[], lowHalfBegin: number, boundary: number, highHalfEnd: number): void {
  const lowHalf: number[] = []
  const highHalf: number[] = []

  let cursor = lowHalfBegin
  // divide the content of the array into two new temporary arrays, lowHalf and highHalf

  /**
   * Repeatedly compare the lowest untaken element in
   * lowHalf with the lowest untaken element in highHalf
   * and copy the lower of the two back into array
   */
  cursor = lowHalfBegin
  let lowHalfCursor = 0
  let highHalfCursor = 0
  // while (lowHalfCursor < lowHalf.length && highHalfCursor < highHalf.length) {

  // }
  /**
   * Once one of lowHalf and highHalf has been fully copied
   * back into array, copy the remaining elements from the
   * other temporary array back into the array
   */
  // while (lowHalfCursor < lowHalf.length) {

  // }
  // while (highHalfCursor < highHalf.length) {

  // }
}

// Takes an array and recursively merge sorts it
export function mergeSort(array: number[], lowHalfBegin = 0, highHalfEnd = array.length - 1): void {
  // if (lowHalfBegin < highHalfEnd){

  // }
}
