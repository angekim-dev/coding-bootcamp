//exercise1
let reverseArr = arr => arr.reverse();
let array = [10, 20, 30];
console.log(reverseArr(array));

// (let functionname = argument => argument.doSomething();)

// Write a function that takes an array as an argument
//and returns a new array containing all of the items
//that are in the array that was passed in
//but in reverse order.

//exercise2

let together = (arr1, arr2) => [...arr1, ...arr2];
array1 = [10, 20, 30];
array2 = [40, 50];
console.log(together(array1, array2));
// Write a function that takes two arrays as arguments
// and returns a new array containing all of the items in the two arrays passed to it.

//exercise3

const logInfo = city => {
    const { name, country, population: numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};
const moscowRussia = {
    name: "Moscow",
    country: "Russia",
    population: "17 Million people living"
};
logInfo(moscowRussia);

// Rewrite the following function to use destructuring assignment for the three variables it creates
// The three highlighted lines should be replaced with a single line.

// exercise4

function getNameAndCountry(obj) {
    var arr = [];
    arr.push(obj.name);
    arr.push(obj.country);
    return arr;
}

// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country
//     };
// };

var nursultanKz = {
    name: "Nursultan",
    country: "KZ"
};
var kievUkraine = {
    name: "Kiev",
    country: "Ukraine"
};
console.log(getNameAndCountry(kievUkraine));
