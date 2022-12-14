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
    return this.ages.reduce((acc,cur) => acc + cur,0)
   }
   min(){
    return Math.min(...this.ages)
   }
   max(){
    return Math.max(...this.ages)
   }
   range(){
    return Math.max(...this.ages) - Math.min(...this.ages)
   }
   mean(){
    return Math.round(this.sum() / this.count())
   }
   median(){
    const median = this.ages.sort((a,b)=> a-b)
    console.log(median)
    for(let i=0;i<median.length;i++) {
        if(median.length % 2 == 1){
            return median[Math.floor(median.length / 2)]
        }
        let med = median.length / 2
        return (median[med - 1] + median[med]) / 2
    }
   }
   mode(){}
   varia(){
    
    let sd = []
    
    for(let i=0;i<this.ages.length;i++){
       let xx=  this.ages[i] - this.mean()
    //   let sq=  sd.push(xx**2)
    sd.push(xx)
 
    }
    console.log(sd)
    let sqrt=sd.map((n)=>n**2)
    console.log(sqrt)
    let sum=sqrt.reduce((a,b)=>a+b,0)
    console.log(sum)
    return sum / this.ages.length
   }

   std(){
    return Math.sqrt(this.varia())
   }
}
const statistics = new statistic
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.varia()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist())


// Exercise 4
// 1. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{
    constructor(firstName, LastName, Incomes, Expenses){
        this.firstName = firstName
        this.LastName = LastName
        this.Incomes = Incomes
        this.Expenses = Expenses
    }

    totalIncomes(){
    let sum = 0
    for(let i = 0; i < this.Incomes.length; i++){
        sum += this.Incomes[i]
    }
    return sum
    }
    totalExpenses(){
    let sum = 0
    for(let i = 0; i < this.Expenses.length; i++){
        sum += this.Expenses[i]
    }
    return sum
    }
    accountInfo(){
    return `${this.firstName}-${this.lastName} account with these income:${this.Incomes}, expenses:${this.Expenses} but a Total income of ${this.totalIncomes()} and Total expenses of ${this.totalExpenses()}`
    }
    addIncomes(addI){
    this.Incomes.push(addI)
    return this.Incomes
    }
    addExpenses(addE){
    this.Expenses.push(addE)
    return this.Expenses
    }
    addBalance(){
   let balance = `${this.totalIncomes() - this.totalExpenses()}`
   return balance
}
}

const personAccounts = new PersonAccount(
'Abraham',
'Joe',
[40000,40000,30000,50000],
[1000,20000,5000])

console.log(personAccounts.totalIncomes())
console.log(personAccounts.totalExpenses())
console.log(personAccounts.accountInfo())
console.log(personAccounts.addIncomes(500000))
console.log(personAccounts.addExpenses(160000))
console.log(personAccounts.addBalance())
    

