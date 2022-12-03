const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference etween forEach, map, filter, and reduce.
// The forEach() method calls a function for each element only in an array
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((element)=>console.log(element.slice(0).toUpperCase))

// 4. Use forEach to console.log each name in the names array.
names.forEach((element)=>console.log(element))

// 5. Use forEach to console.log each number in the numbers array.
let sum = 0
numbers.forEach(n => sum+=n)
console.log(sum)

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const mapCountries = countries.map((counts)=> counts.toUpperCase())
console.log(mapCountries)

// 7. Use map to create an array of countries length from countries array.
const mapCounts = countries.map((counts)=> counts.length)
console.log(mapCounts)

// 8. Use map to create a new array by changing each number to square in the numbers array
const mapNum = numbers.map((number)=>number**2)
console.log(mapNum)

// 9. Use map to change to each name to uppercase in the names array
const mapNames = names.map((name) => name.toUpperCase())
console.log(mapNames)

// 10. Use map to map the products array to its corresponding prices.
const mapProduct = products.map((produce)=>console.log(produce))

// 11. Use filter to filter out countries containing land.
const countryWithLand = countries.filter((country)=>country.toLowerCase())

// 12. Use filter to filter out countries having six character.
const countryWithsixletters = countries.filter((count)=>count.length===6)
console.log(countryWithsixletters)

// 13. Use filter to filter out countries containing six letters and more in the country array
const countriesWithSixMore = countries.filter((counts)=>counts.length >=6)
console.log(countriesWithSixMore)

// 14. Use filter to filter out country start with 'E'
const countryWithE = countries.filter((countryE)=>countryE.startsWith('E'))
console.log(countryWithE)

// 15. Use filter to filter out only prices with values.
const priceValue = products.filter((produce)=> produce.price)
console.log(priceValue)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr)=>{

}

// 17. Use reduce to sum all the numbers in the numbers array.
const numSum = numbers.reduce((a,b) => a+b, 1)
console.log(numSum)

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let countriesTwo = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway']
const reduceCount = countriesTwo.reduce((acc)=>`${countriesTwo} and IceLand are north European countries`)
console.log(reduceCount)
 

// 19. Explain the difference between some and every

// 20. Use some to check if some names' length greater than seven in names array
const nameGreater7 = names.some((name)=> name.length>7)
console.log(nameGreater7)

// 21. Use every to check if all the countries contain the word land

const countriesContainLand = countries.every((country)=>country.includes('land'))
console.log(countriesContainLand)

// 22. Explain the difference between find and findIndex.

// 23. Use find to find the first country containing only six letters in the countries array
const result = countries.find((country)=> country.length==6)
console.log(result)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const resultIndex = countries.findIndex((country)=>country.length==6)
console.log(resultIndex)

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const countryIndex = countries.findIndex((country)=> country.includes('Norway'))
console.log(countryIndex)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((country)=> country.includes('Russia'))
console.log(russiaIndex)
