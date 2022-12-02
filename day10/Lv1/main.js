const countries = ['Finland', 'Sweden', 'Norway']
// 1. create an empty set
const emptySet = new Set()
console.log(emptySet)

// 2. Create a set containing 0 to 10 using loop
const num = [1,2,3,4,5,6,7,8,9,10]
const setNum = new Set()
for(const set of num){
    setNum.add(set)
}
console.log(setNum)

// 3. Remove an element from a set
console.log(countries.delete('Sweden'))

// 4. Clear a set
countries.clear()

// 5. Create a set of 5 string elements from array
const arrFruit = ['banana','mango','grape','strawberry','apple']
let fruitnewSet = new Set(arrFruit)
console.log(fruitnewSet)

// 6. Create a map of countries and number of characters of a country
countriesA = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  let maps = new Map(countriesA)
  console.log(maps)