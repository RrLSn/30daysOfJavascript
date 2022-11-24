// 1. inear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function  solveLinEquation(a,b,c,x,y){
    let linear = a*x + b*y + c
    return linear
}
solveLinEquation(6,7,8,3,2)

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a,b,c,x){
    let quadratic = a*(x**2) + b*x + c
    return quadratic
}
solveQuadEquation(7,8,9,4)

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let now = new Date
    console.log(`${now.getDay()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getSeconds()}`)
}

// 5. Declare a function name swapValues. This function swaps value of x to y.

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    return arr.toUpperCase()
}

console.log(capitalizeArray('bolu'))

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(){
    let sum = 0
    for(i=0; i<=arguments.length-1; i++){
        sum+=arguments[i]
    }
    return sum;
}
addItem(5,6,7,8,9)

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(a,b,c,d){
    let sum = a + b + c + d
    return sum 
}
sumOfNumbers(6,10,78,10)

// 14. Write a function which takes any number of arguments and return the sum of the arguments
const addItems = (...args) => {
    let sum = 0
    for(i=0; i<=args.length-1; i++){
        sum += args[i]
    }
    return sum
}
addItems(15,30,5,40,10)

// 15. Writ a function which generates a randomUserIp

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(arr){
    arr = '#'+ Math.random().toString(16).substr(2,6)
    return arr
}
randomHexaNumberGenerator()

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(arr){
    arr = Math.random().toString(16).substr(2,7)
    return arr.toUpperCase()
}
userIdGenerator()


