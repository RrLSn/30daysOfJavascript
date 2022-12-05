/*Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
*/
const CharactNum = parseInt(prompt('Enter Number of Character'))
const inputNum = parseInt(prompt('Enter Number of Input'))
 
 const userIdGeneratedByUser = ()=>{
    inputId = ''
    for(k=0;k<inputNum;k++){
        charactId = ''
       for(i=0;i<CharactNum;i++){
            let charact = '1234567890ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            let generatorUser = Math.floor(Math.random()*charact.length)
            charactId+=charact.charAt(generatorUser)
        }
        inputId+=` ${charactId}`
    }
    return inputId
 }



// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    x = Math.floor(Math.random()*256)
    y = Math.floor(Math.random()*256)
    z = Math.floor(Math.random()*256)
    console.log(`rgb(${x},${y},${z})`)
}

rgb(161,43,103)

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = (n) =>{
    hex = '#'
    hexArray = []
        for(i=0; i<6;i++){
            charact = '123456789abcdef'
            random = Math.floor(Math.random()*charact.length)
            hex+= charact.charAt(random)}
    hexArray.push(hex)
    return hexArray
}
arrayOfHexaColors()

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (n) =>{
    rgb=[]
    let rgbColors = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    rgb.push(rgbColors)
    return rgb
}
arrayOfRgbColors()

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function getHex(x){
    let hex = x.toString(16)
    hex = hex.length == 1? '0'+hex: hex
    return hex
}
function convertRgbToHexa(r,g,b){
  return `#`+getHex(r)+getHex(g)+getHex(b)
}
console.log(convertRgbToHexa(245,255,200))

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
// .startsWith('#')
function generateColors(a,b){
    generateArray = []
    hexa = '#'
    if(a.includes(hexa)){
        for(i=0;i<b;i++){
            for(i=0;i<6;i++){
                const charact = '0123456789abcdef'
                const randomHex = Math.floor(Math.random()*charact.length)
                hexa+=charact[randomHex]
            }
            generateArray.push(hexa)
        }
       return generateArray
    } else {
        // for(i=0;i<b;i++){
            const rgba = Math.floor(Math.random()*256)
            const rgbb = Math.floor(Math.random()*256)
            const rgbc = Math.floor(Math.random()*256)
            randomRGB = `rgb(${rgba},${rgbb},${rgbc})`
        // }
        generateArray.push(randomRGB)
    }
    return generateArray
}

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// const newItems = []
function shuffleArray(arr){
arr.sort()
const newItems = [...arr]
return newItems
}
shuffleArray([2, 1, 4, 3, 5])

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num){
    if(num ===1 || num ===0)
        return 1
    for(i = num -1; i >= 1; i--){
        num*=i }
    return num 
}
factorial(10)

// 0r

function factorials(num){
    if(num ===1 || num ===0)
        return 1
    else if(num >=2 && num <=20){
        for(i = num -1; i >= 1; i--){
        num*=i }
    return num}
else { return NaN}
}
factorials(21)

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
  return param === undefined || param === null || param === '';
}
isEmpty()
isEmpty(5)

// or

function isEmptys(param){
    if(param === undefined || param === null || param === ''){
        return true
    }else{
        return false
    }
}
isEmptys()
isEmptys(4)


// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args){
    sum = 0
    for(i=0; i<=args.length-1; i++){
        sum+=args[i]
    }
    console.log(sum)
}
sum(5,8,9,0,4,4)

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let sum = 0
function sumOfArrayItems(arr){
    for(i=0;i<arr.length;i++){
        if(typeof arr[i] != 'number'){
            return 'These are mixture of numbers and alphabet'
        }
        sum +=arr[i]
    }
    return sum
}

sumOfArrayItems([1,3,5,6,7,9,'u'])
sumOfArrayItems([1,4,7,9,0,100])

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
let sum =0
function averageArray(arr){
    for(i=0;i<arr.length;i++){
        if(typeof arr[i] !='number'){
            return 'These array items are not number types'
        }
        sum += arr[i]
        average = Math.round(sum/arr.length)
    }
    return average
} 
averageArray([1,3,5,6,7,9,'u'])
averageArray([1,4,7,9,0,100])

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr){
    for(i=0;i<arr.length;i++){
        if(arr.length<5){
            return 'Items not found'
        }
        else{
            arr[4] = arr[4].toUpperCase()
            return arr
        }
    }
}

modifyArray(['Mango','Orange','Tomatoes'])
modifyArray(['Mango','Orange','Tomatoes','Grape','Banana','Strawberries'])


// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(n){
    if (n<2){
        return false
    }
    if (n==2){
        return true
    }
    for (i=2; i<n; i++) {
        if(n%i==0){
            return false
        }
    }
    return true
}
isPrime(19)


//16. Write a functions which checks if all items are unique in the array.
let unique = []
function checkUnique(arr){
    for(i=0;i<arr.length;i++){
        if(unique.includes(arr[i])){
            return'Not a unique Number'
        }
        unique.push(arr[i])
    }
    return 'Is a unique number'
}

// 17. Write a function which checks if all the items of the array are the same data type.
function itemsCheck(arr){
    for(i=1;i<arr.length;i++){
        if(typeof arr[0]===typeof arr[i]){
            return true
        }
    }
    return false
}

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variable){
    if(variable==='$'||variable==='_'){
        console.log('valid')
    } 
    else
        console.log('Invalid')
}

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const uniqueNum =[]
function SevenRanNum(){
    for(i=0;i<7;i++){
        let random = Math.floor(Math.random()*10)
        if(uniqueNum.charAt(random)){
            return
        }
        else{return uniqueNum.push(random)}
    }
    return uniqueNum
}
SevenRanNum()

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr){
    let country = []
    for(i=arr.length-1; 1>0;i--){
      country.push(arr[i])
    }
    return country
}

reverseCountries(['ghana','Togo', 'Nigeria'])
