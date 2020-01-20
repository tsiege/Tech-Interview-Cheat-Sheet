import { assert } from 'chai'
import { swap, indexOfMinimum, selectionSort } from './selectionSort'

describe('Selection Sort', () => {
  describe('swap', () => {
    it('swaps position of two items in an array given their indices', () => {
      const arr1 = [4, 3, 2, 1]
      const arr2 = [4, 3, 2, 1]
      const arr3 = [4, 3, 2, 1]
      swap(arr1, 0, 1)
      assert.deepEqual(arr1, [3, 4, 2, 1])
      swap(arr2, 0, 3)
      assert.deepEqual(arr2, [1, 3, 2, 4])
      swap(arr3, 1, 2)
      assert.deepEqual(arr3, [4, 2, 3, 1])
    })
  })
  describe('indexOfMinimum', () => {
    it('finds the index of the smallest item from a given starting point', () => {
      assert.deepEqual(indexOfMinimum([1, 2, 3], 0), 0)
      assert.deepEqual(indexOfMinimum([1, 2, 3], 1), 1)
      assert.deepEqual(indexOfMinimum([1, 2, 3], 2), 2)
    })
  })
  describe('selectionSort', () => {
    it('sorts an array in place', () => {
      const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      const arr2 = [56, 34, 103, -1, 11, 0, -23, 10, 75]
      const arr3 = [-12, -15, -6, -3, -2, 0, -23, -13, -75]
      selectionSort(arr1)
      assert.deepEqual(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      selectionSort(arr2)
      assert.deepEqual(arr2, [-23, -1, 0, 10, 11, 34, 56, 75, 103])
      selectionSort(arr3)
      assert.deepEqual(arr3, [-75, -23, -15, -13, -12, -6, -3, -2, 0])
    })
  })
})

