//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Sodiq"
let lastName = "Afolabi"
let country = "Nigeria"
let city = "Lagos"
let age = 15
let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

//2. Check if type of '10' is equal to 10
console.log(typeof '10' == 10)

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

/*4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/
//true
console.log(10 == 10)
console.log(!(typeof '10' == 10))
console.log(!(parseInt('9.8') == 10))
//false
console.log(!("10" == "10"))
console.log((country == age))
console.log(parseInt('9.8') == 10)

/*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement. */
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

/*6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4')  true
There is no 'on' in both dragon and python*/
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

/*7. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */
const today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today)
console.log(today.getDay()+1)
console.log(today.getHours())
console.log(today.getMinutes())

let past = new Date("1-01-1970")
let present = new Date()
console.log(present-past)

//0r

console.log(Date.now())