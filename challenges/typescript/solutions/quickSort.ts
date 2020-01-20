/**
 * Swaps two items in an array, changing the original array
 */
export function swap(array: number[], firstIndex: number, secondIndex: number): void {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
/**
 * This function partitions given array and returns the index of the pivot.
 */
export function partition(array, left, right): number {
  let pivotPosition = left

  /**
   * Compare array[nextToCompare] with array[right], for nextToCompare = left, left + 1,... right - 1
   * maintaining that:
   * array[right] (last element) is the pivot
   * array[left..pivotPosition-1] are values known to be <= to array[right]
   * i.e. Values to left of pivot are less than or equal to pivot
   * array[pivotPosition..nextToCompare - 1] are values known to be > array[right]
   * i.e. Values to right of pivot are greater than pivot
   * array[nextToCompare..right - 1] haven't been compared with array[right]
   * If array[nextToCompare] > array[right], just increment nextToCompare.
   */
  for (let nextToCompare = left; nextToCompare < right; nextToCompare++) {
    /**
     * If array[nextToCompare] <= array[right], swap array[nextToCompare] with array[pivotPosition],
     * increment pivotPosition, and increment nextToCompare.
     */
      if (array[nextToCompare] <= array[right]) {
          swap(array, nextToCompare, pivotPosition)
          pivotPosition++
      }
  }

  /**
   * Once all elements in array[left..right-1]
   * have been compared with array[right],
   * swap array[right] with array[pivotPosition], and return pivotPosition.
   */
  swap(array, right, pivotPosition)

  /**
   * pivotPosition is the new index of the pivot
   */
  return pivotPosition
}

/**
 * Recursively find the pivot and quickSort your array, dividing each array as you recurse
 */
export function quickSort(array: number[], left: number = 0, right: number = array.length - 1): void {
  if (left < right) {
    const pivot = partition(array, left, right)
    quickSort(array, left, pivot - 1)
    quickSort(array, pivot + 1, right)
  }
}
