// 1. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let manySkills = [
    users.Alex.skills,
    users.Asab.skills,
    users.Brook.skills,
    users.Daniel.skills,
    users.John.skills,
    users.Thomas.skills,
    users.Paul.skills]

    for(const skill of manySkills){
      if(skill.length>=4){
        console.log(skill)
      }
    }

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedinUser = [
    users.Alex.isLoggedIn,
    users.Asab.isLoggedIn,
    users.Brook.isLoggedIn,
    users.Daniel.isLoggedIn,
    users.John.isLoggedIn,
    users.Thomas.isLoggedIn,
    users.Paul.isLoggedIn
]

for(const logged of loggedinUser){
    if (logged == true){
        console.log(logged.length)
    }
}

let greatPoint = [
    users.Alex.points,
    users.Asab.points,
    users.Brook.points,
    users.Daniel.points,
    users.John.points,
    users.Thomas.points,
    users.Paul.points
]

for(const point of greatPoint){
    if(point>=50){
        console.log(point)
    }
}

// 3. Find people who are MERN stack developer from the users object

let stackDev = [
    users.Alex.skills,
    users.Asab.skills,
    users.Brook.skills,
    users.Daniel.skills,
    users.John.skills,
    users.Thomas.skills,
    users.Paul.skills
]



for(const mernStack of stackDev){
    let mern = [
        'MongoDB',
        'Express',
        'React',
        'Node'
    ]
    let menrSt = mernStack.includes(mern)
    if(menrSt == true){
        console.log(menrSt)
    }
}

// 4. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users)
copyUsers.Afolabi = {
  email:'afol@sodiq.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 50,
  isLoggedIn: true,
  points: 100
}
console.log(copyUsers)

// 5. Get all keys or properties of users object
const key = Object.keys(copyUsers)
console.log(key)

// 6. Get all the values of users object
const value = Object.values(copyUsers)
console.log(value)

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Country: 'Nigeria',
    Capital: 'Abuja',
    Population: 'Over 200million',
    Languages: '500 languages'
}

countries.fullDetails = function(){
    let countryInfo = `A country ${this.Country} with ${this.Capital} as her Capital has a total population of ${this.Population} and speaks over ${this.Languages}.`
    return countryInfo
}

console.log(countries.fullDetails())