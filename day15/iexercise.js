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
console.log(Info)

class ColorInfo{
    constructor(color1,color2,color3,color4){
        this.color1 = 'Green'
        this.color2 = 'White'
        this.color3 = 'Black'
        this.color4 = 'Red'
    }
}

let color = new ColorInfo()
console.log(color)

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
console.log(person1)  

console.log(person2)  

console.log(lastperson) 

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
console.log(individual)   

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
console.log(NatInfo)  

const newInfo = new People('Abraham', 'Lincoln', 105, 'USA', 'Wisconsin', 'Computer Father') 
console.log(newInfo)

// Class methods
// Creating a class method in a class which are JavaScript function inside a class 
class FullName {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const NameInfo = new FullName('Abraham','David',28, 'Nigeria', 'Lagos')
console.log(NameInfo.getFullName())

class MyInfo {
    constructor(firstName,lastName,hobby){
        this.firstName = firstName
        this.lastName = lastName
        this.hobby = hobby
    }
    myFullInfo(){
        const fullInfo = `My name is ${this.firstName} ${this.lastName} and i love listeining to ${this.hobby}`
        return fullInfo
    }
}

const myInfo = new MyInfo('AFOLABI','SODIQ','MUSIC')
console.log(myInfo.myFullInfo())


// Properties with initial value
class FullNames {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.scores = 0
        this.skills = []
    }
    getFullNames(){
        const FullNames = this.firstName + ' ' + this.lastName + ' ' + this.country
        return FullNames
    }
}

const nameInfo1 = new FullNames('Abraham','David',28, 'Nigeria', 'Lagos')
const nameInfo2 = new FullNames('Alani','Oyekunle', 50, 'Nigeria', 'Oy0')

console.log(nameInfo1.scores)
console.log(nameInfo2.scores)
console.log(nameInfo1.skills)
console.log(nameInfo2.skills)

// A method could be regular method or a getter or a setter. Let us see, getter and setter.

// getter
// The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value

class GetterInfo {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.scores = 0
        this.skills = []
    }
    getGetterInfo(){
        const FullNames = this.firstName + ' ' + this.lastName + ' ' + this.country
        return FullNames
    }

    get getScores(){
        return this.scores
    }

    get getSkills(){
        return this.skills
    }
}

const Info1 = new GetterInfo('Abraham','David',28, 'Nigeria', 'Lagos')
const Info2 = new GetterInfo('Alani','Oyekunle', 50, 'Nigeria', 'Oy0')

console.log(Info1.getScores)
console.log(Info2.getScores)
console.log(Info1.getSkills)
console.log(Info2.getSkills)

// setter
class SetterInfo {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.scores = 5
        this.skills = []
    }
    getSetterInfo(){
        const FullNames = this.firstName + ' ' + this.lastName + ' ' + this.country
        return FullNames
    }

    get getScores(){
        return this.scores
    }

    get getSkills(){
        return this.skills
    }

    set setScores(score){
        this.scores += score
    }

    set setSkill(skill){
        this.skills.push(skill)
    }
}

const personA = new SetterInfo('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const personB = new SetterInfo('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

personA.setScores = 1
console.log(personA.scores)

personB.setScores = 5
console.log(personB.scores)

personA.setSkill = 'HTML'
personA.setSkill = 'CSS'
personA.setSkill = 'JavaScript'

console.log(personA.skills)
personB.setSkill = 'Planning'
personB.setSkill = 'Managing'
personB.setSkill = 'Organizing'
console.log(personB.skills)

// Inheritance
// syntax
// class ChildClassName extends {
    
//      code goes here
//    }