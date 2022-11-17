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