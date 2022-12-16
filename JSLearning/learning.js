// Object

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.firstName) //accessing key firstName
console.log(person['lastName'])//accessing key lastName
console.log(person.skills[4]) //accessing a value 
console.log(person['skills'][5]) //accessing a value
console.log(person.getFullName())

// Setting a new keys in an object
person.Nationality = 'Finlander'
person.isMarried = false
person.country = 'Nigeria' //modify the country, changing it to Nigeria
console.log(person.country)

person.city = 'Lagos' //modify the city, changing it to Lagos
person.skills.unshift('SasS') //add a new value to the key 'skills'
console.log(person.skills)

person.fullIndividualInfo = function(){
    // let individualInfo = this.firstName + ' ' + this.lastName 
    return `My names are ${this.firstName} ${this.lastName}, living in ${this.city},${this.country} and I'm a develoer with the following skills ${this.skills}`
}

console.log(person.fullIndividualInfo())


//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({},person)//assigning a replical of person to copyPerson
console.log(copyPerson)

let copyskills = Object.assign({},person.skills)//assigning a replical of person.skills to skills
console.log(copyskills)

// Getting object keys using Object.keys()
let getPersonsKeys = Object.keys(person)
console.log(getPersonsKeys)

let getreplicakeys = Object.keys(copyPerson)
console.log(getreplicakeys)

// Getting object values using Object.values()
let getPersonvalues = Object.values(person)
console.log(getPersonvalues)

let getreplicavalues = Object.values(copyPerson)
console.log(getreplicavalues)

// Getting object keys and values using Object.entries()
const getentries = Object.entries(person)
console.log(getentries)


// Checking properties using hasOwnProperty()
// this print true or false
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('skills'))
console.log(person.hasOwnProperty('scores'))
console.log(person.hasOwnProperty('getFullName'))