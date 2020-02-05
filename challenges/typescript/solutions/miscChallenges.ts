/**
 * Takes a string and, ignoring whitespace, returns a true if the string is a palindrome or false if not
 *
 * @param input - String
 * @returns Boolean
 */
export function isPalindrome(input: string) {
  const str = input.replace(/\s/g, '')
  let start = 0;
  let end = str.length - 1;
  while (start !== end) {
    if (start >= end) {
      return true
    }
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

/**
 * Takes an number and returns true if the input is prime, false if it is not.
 *
 * @param input - Number
 * @returns Boolean
 */
export function isPrime(input: number) {
  if (Math.floor(input) !== input) {
    return false
  }
  if (input < 2) {
    return false
  }
  if (input % 2 === 0 && input !== 2) {
    return false
  }
  let n = input - 1
  while (n > 1) {
    const remainder = input % n
    if (remainder === 0) {
      return false
    }
    n--
  }
  return true
}

/**
 * The Fibonacci sequence, simply put is a series of numbers where the next in the series is the sum of the previous two numbers.
 * It is also a classic problem in programming tech interviews. There are two ways of solving it.
 * The first is through procedural programming, which will be the first challenge.
 * The second is through recursive function calling whill be the second challenge.
 * Doing it recursively can be very computationally expensive, so be careful! And see how you can improve performance.
 * The answers, as always, will be in the solution section if you're stuck.
 *
 * Both will take a number as input which will be the Nth number in the sequence
 *
 * NOTE: assume that the fibonnaci sequence starts with 0 and 1 and will have the following sequence
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
 */

/**
 * Takes an number and returns the fibonacci number in that position of the sequence
 *
 * @param input - Number
 * @returns Number
 */
export function proceduralFibonnaci(input: number): number {
  let prev = 0
  let next = 1
  for (let i = 2; i <= input; i++) {
    const placeHolder = next
    next = prev + next
    prev = placeHolder
  }
  return next
}
/**
 * Takes an number and returns the fibonacci number in that position of the sequence
 *
 * @param input - Number
 * @returns Number
 */
const memo = new Map()
export function recursiveFibonnaci(input: number): number {
  if (input <= 1) {
    return input
  }
  if (memo.has(input)) {
    return memo.get(input)
  }
  const minusTwo = recursiveFibonnaci(input - 2)
  const minusOne = recursiveFibonnaci(input - 1)
  memo.set(input - 1, minusOne)
  memo.set(input - 2, minusTwo)

  return minusOne + minusTwo
}
/**
 * The solution above uses memoization to cut down on the branching of the recursive calls.
 * It does this by caching the results of other recursive calls and uses those results instead of calculating them again.
 * The runtime of the above has an Big O of O(n log(n)) where as a naive approach shown below has a O(2^n)
 */
function naiveRecursiveFibonacci(input: number): number {
  if (input <= 1) {
    return input
  }

  return recursiveFibonnaci(input - 2) - recursiveFibonnaci(input - 1)
}
