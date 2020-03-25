// Exercise 1
function* fizzBuzz() {
    let num = 1;
    while (num <= 100) {
        if ((num % 3 === 0) & (num % 5 === 0)) {
            yield "fizzbuzz";
        } else if (num % 3 === 0) {
            yield "fizz";
        } else if (num % 5 === 0) {
            yield "buzz";
        } else {
            yield num;
        }
        num++;
    }
}
for (const nums of fizzBuzz()) {
    console.log(nums);
}

// Implement FizzBuzz using a generator function and a for...of loop.
// First, write a generator function
// that yields the numbers between 1 and 100 in order with the following exceptions
// If the number is divisible by 3, yield the string "fizz"
// If the number is divisible by 5, yield the string "buzz"
// If the number is divisible by both 3 and 5, yield the string "fizzbuzz"
// Then write a for...of loop that loops through the values
// yielded by the generator function and logs each one
