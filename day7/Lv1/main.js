// 1. Declare a function fullName and it print out your full name.
function Name(){
    let firstName = 'Sodiq'
    let space = ' '
    let lastName = 'Afolabi'
    let fullName = firstName + space + lastName
    console.log(fullName)
}

Name()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function printFullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}

printFullName('Sodiq', 'Afolabi')

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addName(a,b){
    let sum = a + b
    console.log(sum)
}

addNumber(7,8)

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    let area = length * width
    console.log(area)
}

areaOfRectangle(10,10)

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    let perimeter = 2 *(length + width)
    console.log(perimeter)
}
perimeterOfRectangle(6,3)

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    let volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism(2,2,2)

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area = Math.PI * (r ** 2)
    console.log(area)
}
areaOfCircle(4)

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = 2 * Math.PI * r
    console.log(circumference)
}
circumOfCircle(2)

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    let density = mass / volume
    console.log(density)
}
density(10,5)

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time){
    let speed = distance / time
    console.log(speed)
}
speed(25,5)

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity){
    let weight = mass * gravity
    console.log(weight)
}
weight(20,10)

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    console.log(oF)
}
convertCelsiusToFahrenheit(10)

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more