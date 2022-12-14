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
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class statistic{
    constructor(
        ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    ){
        this.ages = ages
    }
    count(){
       return this.ages.length
    }
   sum(){
    let sum = this.ages.reduce((acc,cur) => acc + cur,0)
    return sum 
   }
   min(){
    let mean = 
   }
}
const statistics = new statistic
console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
