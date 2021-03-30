// --------------- Problem 3 - Largest Prime Factor ---------------------

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Prime:  a whole number that cannot be made by multiplying other whole numbers
// Prime ex: 2, 3, 5, 7
// Composite ex:  4 (2x2), 6 (2x3), 8 (2x2x2), 9 (3x3)

//Factors:  what we can multiply to get the number
// examples
// 1 × 6 = 6, so 1 and 6 are factors of 6
// 2 × 3 = 6, so 2 and 3 are factors of 6

//Multiples
// examples
// 0 × 6 = 0, so 0 is a multiple of 6
// 1 × 6 = 6, so 6 is a multiple of 6

// First part!  Find all factors of a number.
// function number(num) {
// let factors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) { // check if number is a factor
//       factors.push(i)
//     }
//   }
//   return factors
// }

// number(12)

let factors = []


function isFactor(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) { // check if number is a factor
      factors.push(i)
    }
  }
  console.log(factors)
}

isFactor(27)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let prime = []

function isPrime(arr) {
  for (let i = 0; i < factors.length; i++) {
    if (i < 2) { 
      continue
    } else if (i === 2) {
      prime.push(i);
    } else if (i % 2 === 0) {
      continue 
    } else {
    prime.push(i)
    }
  console.log(prime);
  }
}

isPrime(arr1);

