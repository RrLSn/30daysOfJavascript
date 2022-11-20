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