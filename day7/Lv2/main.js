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
