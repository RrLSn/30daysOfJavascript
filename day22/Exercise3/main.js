const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }

bodyEl = document.querySelector('body')
bodyEl.style.widows = '100vw'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.cursor = 'pointer'

const mainEl = document.createElement('main')
mainEl.style.width = '50%'
mainEl.style.margin = 'auto'
bodyEl.appendChild(mainEl)

h1El = document.createElement('h1')
h1El.textContent = 'Asabeneh Yatayeh challenges in '
h1El.style.fontWeight = '500'
h1El.style.textAlign = 'center'

spanEl = document.createElement('span')
spanEl.textContent = '2020'
spanEl.style.fontSize = '5rem'
spanEl.style.fontWeight = '700'
h1El.append(spanEl)

mainEl.appendChild(h1El)

const h2El = document.createElement('h2')
h2El.textContent = asabenehChallenges2020.challengeSubtitle
h2El.style.textAlign = 'center'
h2El.style.fontWeight = '400'
h2El.style.textDecoration = 'underline'
h2El.style.fontSize = '1.5rem'
mainEl.appendChild(h2El)

const pEl = document.createElement('p')
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const hour = now.getHours()
let hr = hour < 10? `0${hour}`: `${hour}`
const minute = now.getMinutes()
let min = minute < 10? `0${minute}`: `${minute}`
const second = now.getSeconds()
let sec = second < 10? `0${second}`: `${second}`
const fullDate = `${monthNames[month]} ${day}, ${year} ${hr}:${min}:${sec}`
pEl.textContent = fullDate
pEl.style.margin = 'auto'
pEl.style.background = 'red'
pEl.style.width = 'max-content'
pEl.style.padding = '0.5rem 1.5rem'
pEl.style.fontWeight = 'bold'
pEl.fontSize = '0.9rem'

const rdcolor = () => {
    spanEl.style.color = '#'+ Math.random().toString(16).substr(2,6)
    pEl.style.background = '#'+ Math.random().toString(16).substr(2,6);
}
setInterval(rdcolor,1000)

mainEl.appendChild(pEl)

const UEl = document.createElement('ul')
for(i = 0; i < 7; i++){
    const liEl = document.createElement('li')
    UEl.appendChild(liEl)
}

mainEl.appendChild(UEl)

const liEl = document.querySelectorAll('li')
for(i=0; i < liEl.length; i++){
    liEl[i].style.background = '#eb695b'
    liEl[i].style.marginBottom = '0.2rem'
    liEl[i].style.padding = '2rem'
    liEl[i].style.listStyle = 'none'
    liEl[0].style.background = '#5bbc7a'
    liEl[1].style.background = '#f7dc5c'
}


