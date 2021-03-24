// --------------- Problem 1 - Multiples of 3 and 5 ---------------------

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// make a for loop {
//   if a multiple of 3 and 5 print "FizzBuzz"
//   else if a multiple of 3 print "Fizz"
//   else if a multiple of 5 print "Buzz"
//   else print i
// }

// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz")
//   } else if (i % 3 === 0) {
//     console.log("Fizz")
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }
// ................... Answer.......................

function sumOfMultiples() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum = sum + i;
    } else if (i % 3 === 0) {
      sum = sum + i;
    } else if (i % 5 === 0) {
      sum = sum + i;
    } else {
      console.log(i);
    }
  }
  console.log(`----- SUM ${sum}`);
  return sum;
}

sumOfMultiples();
