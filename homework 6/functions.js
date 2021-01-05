// isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

function isPrime (a) {
  let prime = true
  if (a < 2) {
    return false
  }
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      prime = false
      break
    }
  }
  return prime
}

// factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial (a) {
  if (a < 2) {
    return 1
  } else {
    return a * factorial(a - 1)
  }
}

// fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765

function fib (num) {
  let a = 1
  let b = 1
  for (let i = 3; i <= num; i++) {
    const c = a + b
    a = b
    b = c
  }
  return b
}
// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

function isSorted (arr) {
  let res = true
  for(let i; i < this.length ; i++){
    if(arr.sort()){
      return res
    }
    else {
      res = false
    }
    return res
  }
}

// // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

let str1 = ''
const str = ''

function reverse (str) {
  for (let i = str.length; i >= 0; i--) {
    const x = str.charAt(i)
    str1 = str1 + x
  }
  return str1
}

// indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

function indexOf(arr, a){
  let ind = -1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === a){
      ind = [i]
    }
  }
  return ind
}

// // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

let res = true
const str2 = reverse(str)

function isPolindrom (str) {
  for (i = 0; i < str.length; i++) {
    if (str !== str2) {
      res = false
    }
  }
  return res
}

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence
// (there are either no missing numbers, or exactly one missing number).
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.

// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing (arr) {
  let res;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i -1]){
      res = [i]
    }
    else {
      res = undefined
    }
  }
  return res
}

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false

