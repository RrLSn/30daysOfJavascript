// Exercise 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name,color){
        this.name = name
        this.age = 5
        this.color = color
        this.legs = []
    }
    getFullDogInfo(){
        const dogInfo = this.name + ' ' + this.age + ' ' + this.color
        return dogInfo
    }

    set setage(age){
        this.age += age
    }

    set setLeg(leg){
        this.legs.push(leg)
    }
}


const firstDog = new Animal('pug','Gray')
const secondDog = new Animal('Bull','Black')

firstDog.setage = 7
console.log(firstDog.age)

secondDog.setage = 10
console.log(secondDog.age)

firstDog.setLeg = 'small legs'
firstDog.setLeg = 'small height'
firstDog.setLeg = 'friendly'

console.log(firstDog.legs)

secondDog.setLeg = 'Aggressive'
secondDog.setLeg = 'Massive looking'
secondDog.setLeg = 'BigHead'

console.log(secondDog.legs)


// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    dogChild(){
        console.log('Dogs are caring,friendly but culd be agreesive and dangerous')
    }
}

const dogsInfo = new Dog('Helsinsky','Black')
console.log(dogsInfo)
