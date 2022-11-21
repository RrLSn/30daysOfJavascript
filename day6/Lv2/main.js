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
  for(i=0; i<newArr.length; i++){
    console.log(`${newArr[i].length}`)
  }

  // 6. Use the countries array to create the following array of arrays:
  for(i=0; i<newArr.length; i++){
    arrayOfArray = [newArr[i], newArr[i].slice(0,3), newArr[i].length]
    console.log(arrayOfArray)
  }

  // 7. in above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  for(const c of countries){
    if (c.includes('land')){
        console.log(c)
      } 
        else{
          console.log(c+' '+'This counntry does not contain land')
        }
      }

      // 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
      for(const g of countries){
        if(g.includes('ia')){
          console.log(g)
        }
        else{
          console.log(g+' '+'These countries does not contain ia')
        }
      }