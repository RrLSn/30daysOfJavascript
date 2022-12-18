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

// LOOPS
// ----for loops
let fruitsArr = ["Apple", "Orange", "Pear"];
for(let i=0; i<fruitsArr.length; i++){
    console.log(fruitsArr[i])
}

// ---for...of loops
for(const manfruits of fruitsArr){
    console.log(manfruits)
}

// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

// Technically, because arrays are objects, it is also possible to use for..in:

for(const key in fruitsArr){
    console.log(fruitsArr[key])
}

// But that’s actually a bad idea. There are potential problems with it:

// 1. The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

// 2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.


// A word about “length”

// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

// decreasing the length of an array
let array = [1,2,3,4,5];
array.length = 2    // truncate to 2 elements
console.log(array)

array.length = 5    // return length back
console.log(array.length)
console.log(array[3])  // undefined: the values do not return

// increasing the length of an array
let newArray = [1,2,3,4,5];
newArray.length = 7;
console.log(newArray[6])


// Multidimensional arrays
// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix[2][2])


//   Don’t compare arrays with ==
// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

// This operator has no special treatment for arrays, it works with them as with any objects.

// Let’s recall the rules:

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.
// The strict comparison === is even simpler, as it doesn’t convert types.

// So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

