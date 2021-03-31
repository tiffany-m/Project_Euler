// --------------- Problem 4 Largest Palindrome Product -------------------

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindrome(num) {
  let reversed = new String(num).split('').reverse().join('') // convert to string, split the string into array, reverse items in array, join back together
  // Number(reversed) === num?
console.log(reversed)
}

isPalindrome(9009)
isPalindrome(1234)