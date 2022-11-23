// 1. Develop a small script which generate any number of characters random id:
Math.random().toString(36).substr(2,12)


// 2. Write a script which generates a random hexadecimal number.
'#'+ Math.random().toString(16).substr(2,6)

// 3. Write a script which generates a random rgb color number.
x = Math.floor(Math.random()*256)
y = Math.floor(Math.random()*256)
z = Math.floor(Math.random()*256)
console.log(`rgb(${x},${y},${z})`)

// 4. Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const newArr = []
  for(const country of countries){
    newArr.push(country.toUpperCase())
  }

  console.log(newArr)

  // 5. Using the above countries array, create an array for countries length'.
  const newArrayLength = []
  for(i=0; i<newArr.length; i++){
    newArrayLength.push(`${newArr[i].length}`)
  }
  console.log(newArrayLength)

  // 6. Use the countries array to create the following array of arrays:
  for(i=0; i<newArr.length; i++){
    arrayOfArray = [newArr[i], newArr[i].slice(0,3), newArr[i].length]
    console.log(arrayOfArray)
  }

  // 7. in above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  countriesLand = []
  for(const c of countries){
    if (c.includes('land')){
      countriesLand.push(c)
        
      }
      }
      console.log(countriesLand)

      // 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
      countriesia = []
      for(const g of countries){
        if(g.includes('ia')){
         countriesia.push(g)
        }
      }
      console.log(countriesia)

      // 9. Using the above countries array, find the country containing the biggest number of characters.
      // 10. Using the above countries array, find the country containing only 5 characters.
      // 11. Find the longest word in the webTechs array

      // 12. Use the webTechs array to create the following array of arrays:
      const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]
let newArray=[]
      for(i=0; i<webTechs.length; i++){
       newArray.push([webTechs[i], webTechs[i].length])
  
      }
      console.log(newArray)

      // 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
      const mernStack = ["MongoDB", "Express", "React", "Node"]
      for(const mern of mernStack){
        console.log(mern[0])
      }

      // 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
      const newWebTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
      newArrwebTech = []
      for(let i=0; i<newWebTechs.length; i++){
        newArrwebTech.push(newWebTechs[i])
      }
      console.log(newArrwebTech.toString())

      // for of loop
      fornewArrwebTech = []
      for(const tech of newWebTechs){
        fornewArrwebTech.push(tech)
      }
      console.log(fornewArrwebTech.toString())

      // 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
      const fruit = ['banana', 'orange', 'mango', 'lemon']
      const newFruit = []
      for(let i=fruit.length-1; i >= 0; i--){
        newFruit.push(fruit[i])
      }
      console.log(newFruit)

      // 16. Print all the elements of array as shown below.
      const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]

      let zee = fullStack[0].concat(fullStack[1])
      for(const stack of zee){
        console.log(stack)
      }