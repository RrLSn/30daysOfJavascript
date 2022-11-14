//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let Age = prompt("enter your age")
Age >= 18
? console.log("You are old enough to drive") :  console.log("Wait till you are 18 and above")

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

myAge = 20
if (myAge > Age) {
    console.log('I am older than you')}
    
    else{
        console.log('You are older than me')
    }
    
/*3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator. */
let a = 4
let b = 3

if (a>b){
    console.log(`${a} is greater than ${b}`)
}
else{
    console.log(`${a} is less than ${b}`)
}

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt('enter Number')

if (num % 2 == 0){
    console.log(`${num} is even number`)
}
else {
    console.log(`${num} is not even number`)
}
  