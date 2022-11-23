// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
for (let i = 0; i <= 10; i++){
    console.log(i)
}
//while loop
let a = 0
while (a <= 10){
    console.log(a)
    a++
}
//do while loop
let b = 0
do {
    console.log(b)
    b++ }
    while(b <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--){
    console.log(i)
}

// 3. Iterate 0 to n using for loop
const n = 50
for (let i = 0; i <= n; i++){
    console.log(i)
}

// 4. Write a loop that makes the following pattern using console.log():
for(let i=0; i<=7; i++){
    console.log('#'.repeat(i))
}

// 5. Use loop to print the following pattern:
for (let f = 0; f <= 10; f++){
    console.log(`${f} * ${f} = (${f * f})`)
}

// 6. Using loop print the following pattern
for (let z = 0; z <= 10; z++){
    console.log(`${z} ${z**2} ${z**3}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i <= 100; i++){
    if (i % 2 == 1){
        console.log(i)
    }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
const numAddup = []
for(let i=0; i<=100; i++){
    numAddup.push(i)
}

let sum = 0
for(let i = 0; i < numAddup.length; i++){
    sum += numAddup[i]
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
const odd = []
for(let i= 0; i<=100; i++){
    if(i % 2 == 1)
    odd.push(i)
}

let sumOdd = 0
for(let i = 0; i < odd.length; i++){
    sumOdd +=odd[i]
}

const even = []
for(let i=0; i<=100; i++){
    if(i % 2 == 0){
        even.push(i)
    }
}

let sumEven = 0
for(let i = 0; i < even.length; i++){
    sumEven +=even[i]
}

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const emptyArr = []
emptyArr.push(sumOdd)
emptyArr.unshift(sumEven)
console.log(emptyArr)

// 13. Develop a small script which generate array of 5 random numbers
Array.from({length: 5}, () => Math.floor(Math.random()*50))

randomArr = []
for(let i=0; i<=5; i++){
    randomArr.push(Math.floor(Math.random()*10)) *1
}
console.log(randomArr)

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
Array.from({length:5}, () => Math.floor(Math.random()*100))

// 15. Develop a small script which generate a six characters random id:
Math.random().toString(36).substr(2,6)