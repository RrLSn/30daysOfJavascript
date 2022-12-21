let countries = [
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



const bodyEl = document.querySelector('body')
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.width = '100vw'
// bodyEl.style.height = '100vh'
bodyEl.style.cursor = 'pointer'
bodyEl.style.overflowX = 'hidden'

const h1El = document.createElement('h1')
h1El.textContent = 'WORLD COUNTRIES LIST'
h1El.style.fontSize = '3rem'
h1El.style.width = 'max-content'
h1El.style.margin = 'auto'
h1El.style.letterSpacing = '1rem'
bodyEl.appendChild(h1El)

const h2El = document.createElement('h2')
h2El.textContent = `Total number of countries: ${countries.length}`
h2El.style.width = 'max-content'
h2El.style.margin = 'auto'
bodyEl.appendChild(h2El)

const h3El =  document.createElement('h3')
h3El.textContent = '30DaysOfJavaScript:DOM Day-2'
h3El.style.margin = 'auto'
h3El.style.fontWeight = '400'
h3El.style.width = 'max-content'
bodyEl.appendChild(h3El)

const h4El =  document.createElement('h3')
h4El.textContent = 'Author: Asabeneh Yetayeh'
h4El.style.margin = 'auto'
h4El.style.fontWeight = '400'
h4El.style.width = 'max-content'
bodyEl.appendChild(h4El)

const divEl = document.createElement('div')
divEl.style.width = '70%'
divEl.style.height = 'max-content'
divEl.style.margin = '5rem auto'
divEl.style.display = 'grid'
divEl.style.gridTemplateColumns = 'repeat(6,1fr)'

for(let i=0; i<countries.length; i++){
    const pEl = document.createElement('p')
    pEl.textContent = countries[i].toUpperCase()
    pEl.style.width = '11rem'   
    pEl.style.height = '10rem'
    pEl.style.display = 'flex'
    pEl.style.fontWeight = '600'
    pEl.style.justifyContent = 'center'
    pEl.style.alignItems = 'center'
    pEl.style.textAlign = 'center'
    pEl.style.borderRadius = '0.3rem'
    pEl.style.boxShadow = '0 0 0.5rem 0 gray'
    divEl.appendChild(pEl)
}
bodyEl.appendChild(divEl)

