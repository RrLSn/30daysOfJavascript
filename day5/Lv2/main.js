
//   2. First remove all the punctuations and change the string to array and count the number of words in the array
  let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(',');
console.log(words);
console.log(words.length);

//3.  In the following shopping cart add, remove, edit items
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//    add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


// Exercise Lv3

//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log(ages)
//Finding min age using Math.
const min = Math.min(...ages)
console.log(min)
//Finding max using Math.
const max = Math.max(...ages)
console.log(max)

//Finding min and max using Splice()
const minAges = ages.slice(0,2)
console.log(min)

const maxAges = ages.slice(9)
console.log(max)

// Find the median age(one middle item or two middle items divided by two)
const midA = ages[4]
const midB = ages[5]
const median = (midA + midB)/2
console.log(median)
// Find the average age(all items divided by number of items)

// Find the range of the ages(max minus min)
console.log(max - min)

// Compare the value of (min - average) and (max - average), use abs() method 
// 1.Slice the first ten countries from the countries array
const newCountries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
console.log(newCountries.slice(0,10))

// 2. Find the middle country(ies) in the countries array

if (newCountries.length%2==1){
// console.log(newCountries[Math.floor(newCountries.length/2)])
console.log(newCountries[Math.floor(newCountries.length/2)])
}else{
console.log(newCountries[(newCountries.length/2)])
console.log(newCountries[newCountries.length/2+1])
}

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if (newCountries.length%2 == 1){
  newCountries.unshift('Jordan')
  newCountries.splice(97,194)
  console.log(newCountries)
}
else{
  newCountries.splice(0,96)
  console.log(newCountries)
}