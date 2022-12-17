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

const FetchCountInfo = async () => {
    try {
        let arr = []
        const response = await fetch(countriesAPI)
        const result = await response.json()
        result.filter((ans) => {
            arr.push(`country: ${ans.name}, capital: ${ans.capital}, population: ${ans.population}, languages: ${ans.languages[1]}, area: ${ans.area}`)
        })
        console.log(arr)

    } catch (error) {
        console.log(error)
    }
}

FetchCountInfo()

// Exercise 2
// Print out all the cat names in to catNames variable.
fetch(catsAPI)
.then((res) => res.json())
.then((info) => {
    let answer = info.map(i => i.name)
    console.log(answer)
})

const fetchCatInfo = async () => {
    try {
        let emptyArr = []
        const response = await fetch(catsAPI)
        const result = await response.json()
        result.filter((res) => {
            emptyArr.push(`${res.name}`)
        })
        console.log(emptyArr)
    } catch (err) {
        console.log(err)
    }
}

fetchCatInfo()

// Exercise 3
// 1. Read the cats api and find the average weight of cat in metric unit.

