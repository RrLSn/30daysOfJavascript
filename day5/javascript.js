const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//1. Declare an empty array;
  const arr = Array()
  console.log(arr)

  //2. Declare an array with more than 5 number of elements
  const number = [2, 3, 4, 5, 8]
  console.log(number)

  //3. Find the length of your array
  console.log(number.length)

  //4. Get the first item, the middle item and the last item of the array
  const first = number[0]
  const second = number[2]
  const last = number[4]
  console.log(`${first}, ${second}, ${last}`)

  //5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5


const fullWord = [['polo','shirt','trouser'],[6,7,10],['1','5','2'], [true,false], ['cap','perfume','socks'], ['22','34','67']]
console.log(fullWord.length)

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7. Print the array using console.log()
console.log(itCompanies)

//8. Print the number of companies in the array
console.log(itCompanies.length)

//9. Print the first company, middle and last company
console.log(`${itCompanies[0]}, ${itCompanies[3]}, ${itCompanies[6]}`)

//10. Print out each company
console.log(`${itCompanies[0]}
${itCompanies[1]}
${itCompanies[2]} 
${itCompanies[3]}
${itCompanies[4]}
${itCompanies[5]}
${itCompanies[6]}`)

//11. Change each company name to uppercase one by one and print them out
console.log(`${itCompanies[0].toUpperCase()}
${itCompanies[1].toUpperCase()}
${itCompanies[2].toUpperCase()} 
${itCompanies[3].toUpperCase()}
${itCompanies[4].toUpperCase()}
${itCompanies[5].toUpperCase()}
${itCompanies[6].toUpperCase()}`)

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join())

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = itCompanies[4]
if (company){
    console.log(itCompanies[4])
}
else{
    console.log('Company not found')
}

//14.  Filter out companies which have more than one 'o' without the filter method
let newcompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(newcompany.splice(3,4))

//15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies)

//16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies)

//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, itCompanies.length))

//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

//20. Remove the first IT company from the array
// console.log(itCompanies.splice(1,7))

//21. Remove the middle IT company or companies from the array
// console.log(itCompanies.splice(0, 24))

// Remove the last IT company from the array
// Remove all IT companies
