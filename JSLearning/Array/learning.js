// Declaration
// There are two syntaxes for creating an empty array:

let arr = new Array();
console.log(arr)

let newarr = [];
console.log(newarr)

// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

let fruits = ["Apple", "Orange", "Plum"];

// Array elements are numbered, starting with zero.
// We can get an element by its number in square brackets:
console.log(fruits[0])  // Apple
console.log(fruits[2])  // Plum
console.log(fruits[1])  // Orange

// We can replace an element:
fruits[2] = 'Banana'
console.log(fruits)  //replacing Plum with Banana

// …Or add a new one to the array:

fruits[3] = 'Plum'
console.log(fruits) // Adding back Plum as a new items

// The total count of the elements in the array is its length:
console.log(fruits.length)

// An array can store elements of any type.
// For instance:

// mix of values
let anyDataarr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
console.log(anyDataarr[1].name)  // get the object at index 1 and then show its name
console.log(anyDataarr[1]) //accessing the second item which is an Object with index number
console.log(anyDataarr[0]) //accessing the first item in the array

console.log(anyDataarr[3]()) // get the function at index 3 and run it
