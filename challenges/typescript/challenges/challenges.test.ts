import { assert } from 'chai'
import { swap as selectionSwap, indexOfMinimum, selectionSort } from './selectionSort'
import { insert, insertionSort } from './insertionSort'
import { merge, mergeSort } from './mergeSort'
import { swap as quickSwap, partition , quickSort } from './quickSort'

describe('Challenges', () => {
  describe('Selection Sort', () => {
    describe('swap', () => {
      it('swaps position of two items in an array given their indices', () => {
        const arr = [4, 3, 2, 1]
        selectionSwap(arr, 0, 3)
        assert.deepEqual(arr, [1, 3, 2, 4])
        selectionSwap(arr, 1, 2)
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
  describe('Merge Sort', () => {
    describe('merge', () => {
      it('merges divides an array in half given a subset and sorts them in place', () => {
        const arr = [4, 3, 2, 1]
        merge(arr, 0, 1, 3)
        assert.deepEqual(arr, [2, 1, 4, 3])
        merge(arr, 0, 0, 1)
        assert.deepEqual(arr, [1, 2, 4, 3])
        merge(arr, 2, 2, 3)
        assert.deepEqual(arr, [1, 2, 3, 4])
      })
    })
    describe('mergeSort', () => {
      it('sorts an array in place', () => {
        const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        const arr2 = [56, 34, 103, -1, 11, 0, -23, 10, 75]
        const arr3 = [-12, -15, -6, -3, -2, 0, -23, -13, -75]
        mergeSort(arr1)
        assert.deepEqual(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        mergeSort(arr2)
        assert.deepEqual(arr2, [-23, -1, 0, 10, 11, 34, 56, 75, 103])
        mergeSort(arr3)
        assert.deepEqual(arr3, [-75, -23, -15, -13, -12, -6, -3, -2, 0])
      })
    })
  })
  describe('Quick Sort', () => {
    describe('swap', () => {
      it('swaps position of two items in an array given their indices', () => {
        const arr = [4, 3, 2, 1]
        quickSwap(arr, 0, 3)
        assert.deepEqual(arr, [1, 3, 2, 4])
        quickSwap(arr, 1, 2)
        assert.deepEqual(arr, [1, 2, 3, 4])
      })
    })
    describe('partition', () => {
      it('partitions the array and moves all smaller members to the left of the pivot and larger members to the right of the pivot', () => {
        const arr = [4, 3, 2, 1]
        assert.deepEqual(partition(arr, 0, 3), 0)
        assert.deepEqual(arr, [1, 3, 2, 4])
        assert.deepEqual(partition(arr, 1, 2), 1)
        assert.deepEqual(arr, [1, 2, 3, 4])
      })
    })
    describe('quickSort', () => {
      it('sorts an array in place', () => {
        const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        const arr2 = [56, 34, 103, -1, 11, 0, -23, 10, 75]
        const arr3 = [-12, -15, -6, -3, -2, 0, -23, -13, -75]
        quickSort(arr1)
        assert.deepEqual(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        quickSort(arr2)
        assert.deepEqual(arr2, [-23, -1, 0, 10, 11, 34, 56, 75, 103])
        quickSort(arr3)
        assert.deepEqual(arr3, [-75, -23, -15, -13, -12, -6, -3, -2, 0])
      })
    })
  })
})
