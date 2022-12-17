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



// 2. Read the countries api and find out the 10 largest countries

// fetch(countriesAPI)
// .then((response) => response.json())
// .then((countries) => {
//     let largestCountry = countries.sort((a,b), a-b)
//     console.log(largestCountry)
// })

const largestPopulation = async () => {
    try {
        let firstTen = []
        const response = await fetch(countriesAPI)
        const populatedCountry = await response.json()
        populatedCountry.filter((res) => {
            firstTen.push(`${res.population}`)
            result = firstTen.sort((a,b) => b-a)
        })
        console.log(result.slice(0,10))
    } catch (error) {
        console.log(error)
    }
}

largestPopulation()


// 3. Read the countries api and count total number of languages in the world used as officials.

const totalLanguages = async () => {
    try {
        let languages = []
        const response = await fetch(countriesAPI)
        const allLanguages = await response.json()
        allLanguages.filter((res) => {
            languages.push(`${res.languages[1]}`)
            filt = languages.length
        })
        console.log(filt)
        
    } catch (error) {
        console.log(error)
    }
}

totalLanguages()
