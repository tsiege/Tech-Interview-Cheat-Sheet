import { assert } from 'chai'
import { swap, indexOfMinimum, selectionSort } from './selectionSort'
import { insert, insertionSort } from './insertionSort'

describe('Challenges', () => {
  describe('Selection Sort', () => {
    describe('swap', () => {
      it('swaps position of two items in an array given their indices', () => {
        const arr = [4, 3, 2, 1]
        swap(arr, 0, 3)
        assert.deepEqual(arr, [1, 3, 2, 4])
        swap(arr, 1, 2)
        assert.deepEqual(arr, [1, 2, 3, 4])
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
  describe('Insertion Sort', () => {
    describe('insert', () => {
      it('inserts members of an array to the right given an index', () => {
        const arr = [4, 3, 2, 1]
        insert(arr, 2, 1)
        assert.deepEqual(arr, [1, 4, 3, 2])
        insert(arr, 2, 2)
        assert.deepEqual(arr, [1, 2, 4, 3])
        insert(arr, 2, 3)
        assert.deepEqual(arr, [1, 2, 3, 4])
      })
    })
    describe('insertionSort', () => {
      it('sorts an array in place', () => {
        const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        const arr2 = [56, 34, 103, -1, 11, 0, -23, 10, 75]
        const arr3 = [-12, -15, -6, -3, -2, 0, -23, -13, -75]
        insertionSort(arr1)
        assert.deepEqual(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        insertionSort(arr2)
        assert.deepEqual(arr2, [-23, -1, 0, 10, 11, 34, 56, 75, 103])
        insertionSort(arr3)
        assert.deepEqual(arr3, [-75, -23, -15, -13, -12, -6, -3, -2, 0])
      })
    })
  })
})
