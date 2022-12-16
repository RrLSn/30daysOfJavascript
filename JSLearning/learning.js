// Object

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.firstName) //accessing key firstName
console.log(person['lastName'])//accessing key lastName
console.log(person.skills[4]) //accessing a value 
console.log(person['skills'][5]) //accessing a value
console.log(person.getFullName())

// Setting a new keys in an object
person.Nationality = 'Finlander'
person.isMarried = false
person.country = 'Nigeria' //modify the country, changing it to Nigeria
console.log(person.country)

person.city = 'Lagos' //modify the city, changing it to Lagos
person.skills.unshift('SasS') //add a new value to the key 'skills'
console.log(person.skills)

person.fullIndividualInfo = function(){
    // let individualInfo = this.firstName + ' ' + this.lastName 
    return `My names are ${this.firstName} ${this.lastName}, living in ${this.city},${this.country} and I'm a develoer with the following skills ${this.skills}`
}

console.log(person.fullIndividualInfo())


//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({},person)//assigning a replical of person to copyPerson
console.log(copyPerson)

let copyskills = Object.assign({},person.skills)//assigning a replical of person.skills to skills
console.log(copyskills)

// Getting object keys using Object.keys()
let getPersonsKeys = Object.keys(person)
console.log(getPersonsKeys)

let getreplicakeys = Object.keys(copyPerson)
console.log(getreplicakeys)

// Getting object values using Object.values()
let getPersonvalues = Object.values(person)
console.log(getPersonvalues)

let getreplicavalues = Object.values(copyPerson)
console.log(getreplicavalues)

// Getting object keys and values using Object.entries()
const getentries = Object.entries(person)
console.log(getentries)


// Checking properties using hasOwnProperty()
// this print true or false
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('skills'))
console.log(person.hasOwnProperty('scores'))
console.log(person.hasOwnProperty('getFullName'))


// Property existence test, “in” operator
console.log('age' in person)
console.log('skills' in copyPerson)
console.log('isMarried' in copyPerson)
console.log('score' in person)

/* Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance: */

const getProperty = 'country'
console.log(getProperty in person)

const getnewProperties = 'scores'
console.log(getnewProperties in copyPerson)

/* Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined: */

let obj = {
  test: undefined
};

console.log( obj.test ); // it's undefined, so - no such property?

console.log( "test" in obj )

/* In the code above, the property obj.test technically exists. So the in operator works right.

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code. */

// The "for....in" Loop
let usser = {
  firstName : 'John',
  lastName : 'Doe',
  age : 30,
  isAdmin : true,
};

for(let key in usser) {
  console.log(key)
  console.log(usser[key])
}


// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Also, we could use another variable name here instead of key. For instance, "for (let prop in usser)" is also widely used.

for(let prop in usser) {
  console.log(prop)
  console.log(usser[prop])
}


// Ordered like an object

/* Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes: */

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
};

console.log(codes)

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

/* The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

But if we run the code, we see a totally different picture:

USA (1) goes first
then Switzerland (41) and so on.
The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49. */

/* Integer properties? What’s that?
The “integer property” term here means a string that can be converted to-and-from an integer without a change.

So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not: */

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number('49'))))  // 49, same, integer property
console.log(String(Math.trunc(Number('+42'))))  // 42, not same "+42" ⇒ not integer property
console.log(String(Math.trunc(Number('4.7'))))  // "4", not same "4.7" ⇒ not integer property

// …On the other hand, if the keys are non-integer, then they are listed in the creation order.

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

// Like this:

let code = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let c in code) {
  console.log(+c)   // 49, 41, 44, 1
}

// The intention is to be printed as ordered in the object and now it works as intended


/* Summary
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.  */


// Task

// 1. Create an empty object usage.
const usage = {}
console.log(usage)

const usagen = new Object()
console.log(usagen)

// 2. Add the property name with the value John.
usage.name = 'John'
console.log(usage)

// 3. Add the property surname with the value Smith.
usage.surnam = 'Smith'
console.log(usage)

// 4. Change the value of the name to Pete.
usage.name = 'Pete'
console.log(usage)

// 5. Remove the property name from the object.
delete usage['name'] 
// delete usage.name
usage


// Sum object properties
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let amount in salaries) {
   sum += salaries[amount]
}
console.log(sum)

console.log(typeof(salaries.John))
console.log(typeof(person))
