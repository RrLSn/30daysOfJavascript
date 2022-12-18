// Exercise lv1
// 1. Create a closure which has one inner function

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count
  }
  return plusOne()
}
const answer = outerFunction()
console.log(answer)


// or 

function oneInnerFunc() {
    let count = 2;
    function minusOne() {
        count--
        return count
    }
    return minusOne()
}

console.log(oneInnerFunc())


// Exercise lv2
// 1. Create a closure which has three inner functions

function threeInnerFunc() {
    let count = 4;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function both(){
        return {
            plusOne:plusOne(),
            minusOne:minusOne()
        }
    }
    return both()
}

console.log(threeInnerFunc())
console.log(threeInnerFunc().minusOne)
console.log(threeInnerFunc().plusOne)


// Exercise Lv3
// 1. reate a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount() {
    const incomes = [40000,40000,30000,50000]
    const expenses = [1000,20000,5000]
    const firstName = 'Sodiq'
    const lastName = 'Afolabi'
    sum = 0;
    function totalIncomes() {
        for(let i=0; i<incomes.length; i++){
            sum += incomes[i]
        }
        return sum
    }
    function totalExpense() {
        for(let i=0; i<expenses.length; i++){
            sum += expenses[i]
        }
        return sum
    }
    function addIncome(adI) {
        return incomes.push(adI)
    }
    function addExpense(adE) {
        return expenses.push(adE)
    }
    function accountBalance(){
        let balance = `${totalIncomes()- totalExpense()}`
        return balance 
    }
    function personInfo() {
        const accountInfo = `${firstName} ${lastName} with incomes: ${incomes} and expenses: ${expenses} total-income: ${totalIncomes()}, total-expenses: ${totalExpense()} and account balance: ${accountBalance()}`
        return accountInfo
    }
    return personInfo()
}
console.log(personAccount())

