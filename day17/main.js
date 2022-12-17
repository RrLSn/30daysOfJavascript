// Exercise Lv1
// 1. Store you first name, last name, age, country, city in your browser localStorage.
window.localStorage.setItem('firstName', 'Sodiq')
window.localStorage.setItem('lastName',' Afolabi')
window.localStorage.setItem('age', 15)
window.localStorage.setItem('country', 'Nigeria')
window.localStorage.setItem('city', 'Lagos')

// Exercise 2
// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName : 'Sodiq',
    lastName : 'Afolabi',
    age : 56,
    skills : ['HTML', 'CSS', 'JS', 'React'],
    country : 'Canada',
    city : 'Ontairo'
}

let studentInfo = JSON.stringify(student, undefined, 4)
window.localStorage.setItem('student', studentInfo)

// Exercise 3
// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount ={
    firstName: 'Abraham',
    lastName: 'Joe',
    incomes: [40000,40000,30000,50000],
    expenses: [1000,20000,5000],
    totalIncomes: function () {
        let sum = 0
        for(let i = 0; i < this.incomes.length; i++){
            sum += this.incomes[i]
        }
        return sum
        },
    totalExpenses: function(){
        let sum = 0
        for(let i = 0; i < this.expenses.length; i++){
            sum += this.expenses[i]
        }
        return sum
        },
    addBalance: function(){
       let balance = `${this.totalIncomes() - this.totalExpenses()}`
       return balance
    }
}

let newPersonInfo = JSON.stringify(personAccount,undefined,4)
window.localStorage.setItem('personAccount', newPersonInfo)

console.log(localStorage)
