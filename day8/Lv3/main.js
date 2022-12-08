// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
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
accountInfo: function(){
    return `${this.firstName}-${this.lastName} account with these income:${this.incomes}, expenses:${this.expenses} but a Total income of ${this.totalIncomes()} and Total expenses of ${this.totalExpenses()}`
},
addIncomes: function(addI){
    this.incomes.push(addI)
    return this.incomes
},
addExpenses: function(addE){
    this.expenses.push(addE)
    return this.expenses
},
addBalance: function(){
   let balance = `${this.totalIncomes() - this.totalExpenses()}`
   return balance
}
}

console.log(personAccount.totalExpenses())
console.log(personAccount.totalIncomes())
console.log(personAccount.addIncomes(300))
console.log(personAccount.addExpenses(300))
console.log(personAccount.addBalance())
console.log(personAccount.addIncomes(1000000))
console.log(personAccount.addExpenses(1000))



// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: '`zwf8md`',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// 2. Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he already has an account.
function signUp(id,username,email,password,created,login){
    let MongoDBase = Object.values(users)
    for(const MongoDB of MongoDBase){
        if(MongoDB._id.includes(id)){
            return 'You already have an account'
        }
    }
    users.push({
        _id:`${id}`,
        username: `${username}`,
        email: `${email}`,
        password:`${password}`,
        createdAt: `${created}`,
        isLoggedIn: `${login}`

    })
    return users
}

console.log(signUp('fg12cy','Abs','Great', 'using','using','great'))
console.log(signUp('Abs','Abs','Abs','Abs','Abs','abs'))


// b. Create a function called signIn which allows user to sign in to the application

function signIn(username,password){
    let isLogin = Object.values(users)
    for(login of isLogin){
        if(login.username == username && login.password == password){
            return 'Welcome Back User'
        }
    } return 'Incorrect Login Credentials'
}

console.log(signIn('john','adegoke456'))
console.log(signIn('Thomas', '123333'))