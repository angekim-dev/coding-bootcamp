function getLessThanZero(arr) {
    var i = arr.filter(function(muffin) {
        return muffin < 0;
    });
    return i;
}
console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));

//Write a function called getLessThanZero
//that expects an array of numbers to be passed to it
//and returns a new array
//containing only those numbers from the array that was passed in
//that are less than zero.
