function reverseArr(arr) {
    var i = arr.slice();
    return i.reverse();
}
var testArr = [1, 2, 3];
console.log(reverseArr(testArr));
console.log(testArr);

//Write a function that takes an array as a parameter
//and returns a new array
//containing all of the items
//that are in the array that was passed in (it) but in reverse order.
//Unlike the reverse method that all arrays have, this function should leave the original array unchanged.
