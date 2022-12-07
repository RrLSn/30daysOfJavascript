// 1. inear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function  solveLinEquation(a,b,c){
    let linear = console.log(`${a}x + ${b}y = -${c}`)
    return linear
}
solveLinEquation(6,7,8)

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a,b,c){
    let quadrat = Math.sqrt(b**2 - 4*a*c)/(2*a)
    rt1 = -b/2*a + quadrat
    rt2 = -b/2*a - quadrat
    console.log(`${rt1},${rt2}`)
}

solveQuadEquation(1,4,4)

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for(let i=0; i < arr.length; i++){
        array = arr[i]
        console.log(array)}
    }
    printArray([5,7,8,95,0])

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let now = new Date
    console.log(`${now.getDay()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getSeconds()}`)
}

// 5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    console.log(`${y},${x}`)
}
swapValues(5,7)

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
reverse = []
function reverseArray(arr){
    for(i=arr.length-1; i>=0; i--){
        reverse.push(arr[i])
        }
        return reverse
    }
    reverseArray([6,7,8,9,2,0])

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
function removeItem(arr){
    let a=arr.slice(2,5) 
 return a}

removeItem([1,2,3,4,5,6])
// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(param){
    sum = 0
    for(i=0; i<=param; i++){
        sum += i
    }
    return sum 
}
sumOfNumbers(3)

//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n){
    sum = 0
    for(i=1; i<=n; i+=2){
        sum += i
    }
    return sum
}
sumOfOdds(10)

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n){
    sum = 0
    for(i=0; i<=n; i+=2){
        sum += i
    }
    return sum
}
sumOfEven(10)

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

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
function randomUserIp() {
    l = Math.floor(Math.random() * 6) + 172;
    m = Math.floor(Math.random() * 200) + 10;
    n = Math.floor(Math.random() * 200) + 10;
    o = Math.floor(Math.random() * 200) + 10;
    randomUser = `${l}.${m}.${n}.${o}`;
    console.log(ip);
  }
  randomUserIp();

// 16. Write a function which generates a randomMacAddress
function randomMacAddress(){
for(i=0;i<5;i++){
    let randomMac = '1234567890ABCDEFGHIJKLMOPQRSTUVWXYZ'
    address1 = Math.floor(Math.random()*randomMac.length)
    address2 = Math.floor(Math.random()*randomMac.length)
    address3 = Math.floor(Math.random()*randomMac.length)
    randomAdress = randomMac.charAt(address1)+randomMac.charAt(address2)+randomMac.charAt(address3)
}
return randomAdress
}

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


