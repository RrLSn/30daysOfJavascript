// Exercise 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name,age,color,legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getName(){
        const name = this.name
        return name
    }

    getAge(){
        const age = this.age
        return age
    }

    getColor(){
        const color = this.color
        return color
    }

    getlegs(){
        const legs = this.legs
        return legs
    }
    getFullDogInfo(){
        const dogInfo = `My Dog ${this.name} is ${this.age} old, ${this.color}, my dog has ${this.legs}`

        return dogInfo
    }
}


const firstDog = new Animal('pug','3months','white', 4)
const secondDog = new Animal('Bull','3years','Black',4)

console.log(firstDog.getColor())


// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    dogChild(){
        console.log('Dogs are caring,friendly but culd be agreesive and dangerous')
    }
}

const dogsInfo = new Dog('Helsinsky','10months', 'Black', 4)
console.log(dogsInfo)


// Exercise 2
// 1. Override the method you create in Animal class

class Dogs extends Animal{
    constructor(name,age,color,gender){
        super(name,age,color)
        this.gender = gender
    }

    saySomething(){
        console.log('My Dog bark when i got back from work')
    }

    getdogInfo(){
       let  fullInfo = `My Dog ${this.name} and she is ${this.age}, ${this.color} color and a ${this.gender}`
       return fullInfo
    }
}

const MyDogInfo = new Dogs('Jerry', '3month', 'white', 'Female')

console.log(MyDogInfo.getdogInfo())



// Exercise 3