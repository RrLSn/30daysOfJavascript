// Defining a classes
//syntax
class ClassName {
    // code
}

// Class Instantiation
class Person {
    // code
}

const person = new Person ()
console.log(person)    // Person {}

// Class Constructor
class PersonInfo {
    constructor(firstName, lastName){
        this.firstName = 'Sodiq'
        this.lastName = 'Afolabi'
    }
}

const Info = new PersonInfo()
console.log(Info)    // PersonInfo {firstName: 'Sodiq', lastName: 'Afolabi'}

class ColorInfo{
    constructor(color1,color2,color3,color4){
        this.color1 = 'Green'
        this.color2 = 'White'
        this.color3 = 'Black'
        this.color4 = 'Red'
    }
}

let color = new ColorInfo()
console.log(color)    // ColorInfo {color1: 'Green', color2: 'White', color3: 'Black', color4: 'Red'}

// Using class to create many Object

class PeopleInfo{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new PeopleInfo('Olaosebikan', 'Yusuf')
const person2 = new PeopleInfo('Ajanaku', 'Oriyomi')
const lastperson = new PersonInfo('Orisumibade', 'Ajalekoko')
console.log(person1)  // PeopleInfo {firstName: 'Olaosebikan', lastName: 'Yusuf'}

console.log(person2)  // PeopleInfo {firstName: 'Ajanaku', lastName: 'Oriyomi'}

console.log(lastperson)  // PersonInfo {firstName: 'Sodiq', lastName: 'Afolabi'}

// Adding more properties to the class
class Individual{
    constructor(firstName,lastName,age,country,city,profession){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.profession = profession
    }
}

const individual = new Individual('John', 'Kenneth', 56, 'United Kingdom', 'Scotland', 'Fullstack Dev')
console.log(individual)   // Individual {firstName: 'John', lastName: 'Kenneth', age: 56, country: 'United Kingdom', city: 'Scotland', profession: 'Fullstack Dev'}

// Default values with constructor

class People{
    constructor(
        firstName = 'Nathasha',
        lastName = 'James',
        age = 18,
        country = 'United State',
        city = 'Ohio',
        profession = 'No Profession'
    )
    {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.profession = profession
    }
}

const NatInfo = new People()  // it will take the default values
console.log(NatInfo)  // {firstName: 'Nathasha', lastName: 'James', age: 18, country: 'United State', city: 'Ohio',profession: 'No Profession'}

const newInfo = new People('Abraham', 'Lincoln', 105, 'USA', 'Wisconsin', 'Computer Father')   // People {firstName: 'Abraham', lastName: 'Lincoln', age: 105, country: 'USA', city: 'Wisconsin',profession: 'Computer Father'}

// Class methods


