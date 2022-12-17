// Exercise 1
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
.then((response )=> response.json())
.then((country) => {
    let res = country.map(i => `country: ${i.name}, capital: ${i.capital}, population: ${i.population}, languages: ${i.languages[1]}, area: ${i.area}`)    
    console.log(res)
    
})


// Exercise 2
// Print out all the cat names in to catNames variable.
fetch(catsAPI)
.then((res) => res.json())
.then((info) => {
    let answer = info.map(i => i.name)
    console.log(answer)
})

