//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let b = 20
let h = 10
let area = 0.5 * b * h
console.log(area)

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = 4
b = 5
let c = 3
let perimeter = a + b + c
console.log(perimeter)

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt("enter length"))
let width = Number(prompt("enter width"))
area = length * width 
console.log(area)

perimeter = 2 * (length + width)
console.log(perimeter)

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = Number(prompt("enter radius"))
let pi = 3.14
let circleArea = pi * r * r
console.log(circleArea)

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 4
let y = 2*x-2
console.log(y)

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let m = (10-2)/(6-2)
console.log(m)

//7. Compare the slope of above two questions.
console.log(y == m)

//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
x = 3
y = x**2 + 6 * x + 9
console.log(y)
x = 5
y = x**2 + 6 * x + 9
console.log(y)

//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
h = 40
let rate = 28
let e = h * rate
console.log(e)

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let namelength = true
namelength
? console.log('name is long')
: console.log('name is short')

//11. Compare your first name length and your family name length and you should get this output.
let firstName = 'Sodiq'
let lastName = 'Afolabi'
let f = (firstName.length)
let l = (lastName.length)
console.log(f)
console.log(l)
console.log(f == l)
console.log(`Your Last Name, ${lastName} is longer than your First Name, ${firstName}`)

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 500
let yourAge = 250
let diff = myAge - yourAge
console.log(diff)
console.log(`I am ${diff} years older than you.`)

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt("enter Birth Year")
let birthYearDiff = 2022-birthYear
birthYearDiff >= 18 
? console.log("Allow to drive") :  console.log("Wait till you are 18 and above")

//15. Create a human readable time format using the Date time object
let now = new Date()
console.log(`${now.getFullYear()}-${now.getMonth() +1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)// YYYY-MM-DD HH:mm
console.log(`${now.getDate()}-${now.getMonth() +1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)// DD-MM-YYYY HH:mm
console.log(`${now.getDate()}/${now.getMonth() +1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)// DD/MM/YYYY HH:mm
