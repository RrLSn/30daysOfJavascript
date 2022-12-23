const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges in",
  challengeTitle: "Asabeneh Yetayeh",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "📖 MSc. Computer Science Ongoing",
      "👨🏾‍🎓 BSc. Information and Communication Eng.",
      "👩🏾‍🎓 MSc. Food Technology",
      "👨🏾‍🎓 BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "✅ Web Development",
      "✅ Data Analysis",
      "✅ Data Visualization",
      "✅ Programming",
      "✅ Databases",
      "✅ Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};



bodyEl = document.querySelector('body')
bodyEl.style.widows = '100vw'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.cursor = 'pointer'

const mainEl = document.createElement('main')
mainEl.style.width = '50%'
mainEl.style.margin = 'auto'
bodyEl.appendChild(mainEl)

const h1El = document.createElement('h1')
h1El.textContent = asabenehChallenges2020.challengeTitle
h1El.style.fontWeight = '500'
h1El.style.textAlign = 'center'

const spanEl = document.createElement('span')
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
for(i = 0; i < 8; i++){
    const liEl = document.createElement('li')
    UEl.appendChild(liEl)
}

mainEl.appendChild(UEl)

const liEl = document.querySelectorAll('li')
for(i=0; i < liEl.length; i++){
    liEl[i].style.background = '#eb695b'
    liEl[i].style.marginBottom = '0.3rem'
    liEl[i].style.padding = '0.5rem 2rem'
    liEl[i].style.listStyle = 'none'
    liEl[0].style.background = '#5bbc7a'
    liEl[i].style.display = 'flex'
    liEl[i].style.alignItems = 'center'
    liEl[i].style.justifyContent = 'space-between'
    liEl[1].style.background = '#f7dc5c'
}

// for first list 
const firstList = document.createElement('p')
firstList.textContent = asabenehChallenges2020.challenges[0].name
firstList.style.textDecoration = 'underline'
firstList.style.color = 'purple'
liEl[0].appendChild(firstList)

// for details with its summary 
const detail1 = document.createElement('details')
const summary1 = document.createElement('summary')
summary1.textContent = asabenehChallenges2020.challenges[0].topics[0]

const optEl1 = document.createElement('p')
optEl1.textContent = asabenehChallenges2020.challenges[0].topics[0]
const optEl2 = document.createElement('p')
optEl2.textContent = asabenehChallenges2020.challenges[0].topics[1]
const optEl3 = document.createElement('p')
optEl3.textContent = asabenehChallenges2020.challenges[0].topics[2]
const optEl4 = document.createElement('p')
optEl4.textContent = asabenehChallenges2020.challenges[0].topics[3]
const optEl5 = document.createElement('p')
optEl5.textContent = asabenehChallenges2020.challenges[0].topics[4]
const optEl6 = document.createElement('p')
optEl6.textContent = asabenehChallenges2020.challenges[0].topics[5]
const optEl7 = document.createElement('p')
optEl7.textContent = asabenehChallenges2020.challenges[0].topics[6]

detail1.append(summary1)
detail1.appendChild(optEl1)
detail1.appendChild(optEl2)
detail1.appendChild(optEl3)
detail1.appendChild(optEl4)
detail1.appendChild(optEl5)
detail1.appendChild(optEl6)
detail1.appendChild(optEl7)
liEl[0].appendChild(detail1)
 
const status1 = document.createElement('p')
status1.textContent = asabenehChallenges2020.challenges[0].status
liEl[0].appendChild(status1)

// for second list
const secondList = document.createElement('p')
secondList.textContent = asabenehChallenges2020.challenges[1].name
secondList.style.textDecoration = 'underline'
secondList.style.color = 'purple'
liEl[1].appendChild(secondList)

// for deatails and summary
const detail2 = document.createElement('details')
const summary2 = document.createElement('summary')
summary2.textContent = asabenehChallenges2020.challenges[1].topics[0]

const opt2El1 = document.createElement('p')
opt2El1.textContent = asabenehChallenges2020.challenges[1].topics[0]
const opt2El2 = document.createElement('p')
opt2El2.textContent = asabenehChallenges2020.challenges[1].topics[1]
const opt2El3 = document.createElement('p')
opt2El3.textContent = asabenehChallenges2020.challenges[1].topics[2]
const opt2El4 = document.createElement('p')
opt2El4.textContent = asabenehChallenges2020.challenges[1].topics[3]
const opt2El5 = document.createElement('p')
opt2El5.textContent = asabenehChallenges2020.challenges[1].topics[4]
const opt2El6 = document.createElement('p')
opt2El6.textContent = asabenehChallenges2020.challenges[1].topics[5]
const opt2El7 = document.createElement('p')
opt2El7.textContent = asabenehChallenges2020.challenges[1].topics[6]

detail2.append(summary2)
detail2.appendChild(opt2El1)
detail2.appendChild(opt2El2)
detail2.appendChild(opt2El3)
detail2.appendChild(opt2El4)
detail2.appendChild(opt2El5)
detail2.appendChild(opt2El6)
detail2.appendChild(opt2El7)
liEl[1].appendChild(detail2)

const status2 = document.createElement('p')
status2.textContent = asabenehChallenges2020.challenges[1].status
liEl[1].appendChild(status2)

// for third list
const thirdList = document.createElement('p')
thirdList.textContent = asabenehChallenges2020.challenges[2].name
liEl[2].appendChild(thirdList)

// for deatails and summary
const detail3 = document.createElement('details')
const summary3 = document.createElement('summary')
summary3.textContent = `HTML & ${asabenehChallenges2020.challenges[2].topics[0]}`

const opt3El1 = document.createElement('p')
opt3El1.textContent = asabenehChallenges2020.challenges[2].topics[0]
const opt3El2 = document.createElement('p')
opt3El2.textContent = asabenehChallenges2020.challenges[2].topics[1]
const opt3El3 = document.createElement('p')
opt3El3.textContent = asabenehChallenges2020.challenges[2].topics[2]
const opt3El4 = document.createElement('p')
opt3El4.textContent = asabenehChallenges2020.challenges[2].topics[3]
const opt3El5 = document.createElement('p')
opt3El5.textContent = asabenehChallenges2020.challenges[2].topics[4]
const opt3El6 = document.createElement('p')
opt3El6.textContent = asabenehChallenges2020.challenges[2].topics[5]
const opt3El7 = document.createElement('p')
opt3El7.textContent = asabenehChallenges2020.challenges[2].topics[6]

detail3.append(summary3)
detail3.appendChild(opt3El1)
detail3.appendChild(opt3El2)
detail3.appendChild(opt3El3)
detail3.appendChild(opt3El4)
detail3.appendChild(opt3El5)
detail3.appendChild(opt3El6)
detail3.appendChild(opt3El7)
liEl[2].appendChild(detail3)

const status3 = document.createElement('p')
status3.textContent = asabenehChallenges2020.challenges[2].status
liEl[2].appendChild(status3)

// for fourth list
const fourthList = document.createElement('p')
fourthList.textContent = asabenehChallenges2020.challenges[3].name
liEl[3].appendChild(fourthList)

// for deatails and summary
const detail4 = document.createElement('details')
const summary4 = document.createElement('summary')
summary4.textContent = asabenehChallenges2020.challenges[3].topics[0]

const opt4El1 = document.createElement('p')
opt4El1.textContent = asabenehChallenges2020.challenges[3].topics[0]
const opt4El2 = document.createElement('p')
opt4El2.textContent = asabenehChallenges2020.challenges[3].topics[1]
const opt4El3 = document.createElement('p')
opt4El3.textContent = asabenehChallenges2020.challenges[3].topics[2]
const opt4El4 = document.createElement('p')
opt4El4.textContent = asabenehChallenges2020.challenges[3].topics[3]
const opt4El5 = document.createElement('p')
opt4El5.textContent = asabenehChallenges2020.challenges[3].topics[4]
const opt4El6 = document.createElement('p')
opt4El6.textContent = asabenehChallenges2020.challenges[3].topics[5]
const opt4El7 = document.createElement('p')
opt4El7.textContent = asabenehChallenges2020.challenges[3].topics[6]

detail4.append(summary4)
detail4.appendChild(opt4El1)
detail4.appendChild(opt4El2)
detail4.appendChild(opt4El3)
detail4.appendChild(opt4El4)
detail4.appendChild(opt4El5)
detail4.appendChild(opt4El6)
detail4.appendChild(opt4El7)
liEl[3].appendChild(detail4)

const status4 = document.createElement('p')
status4.textContent = asabenehChallenges2020.challenges[3].status
liEl[3].appendChild(status4)

// for fifth list
const fifthList = document.createElement('p')
fifthList.textContent = asabenehChallenges2020.challenges[4].name
liEl[4].appendChild(fifthList)

// for deatails and summary
const detail5 = document.createElement('details')
const summary5 = document.createElement('summary')
summary5.textContent = asabenehChallenges2020.challenges[4].topics[0]

const opt5El1 = document.createElement('p')
opt5El1.textContent = asabenehChallenges2020.challenges[3].topics[0]
const opt5El2 = document.createElement('p')
opt5El2.textContent = asabenehChallenges2020.challenges[3].topics[1]
const opt5El3 = document.createElement('p')
opt5El3.textContent = asabenehChallenges2020.challenges[3].topics[2]
const opt5El4 = document.createElement('p')
opt5El4.textContent = asabenehChallenges2020.challenges[3].topics[3]
const opt5El5 = document.createElement('p')
opt5El5.textContent = asabenehChallenges2020.challenges[3].topics[4]
const opt5El6 = document.createElement('p')
opt5El6.textContent = asabenehChallenges2020.challenges[3].topics[5]
const opt5El7 = document.createElement('p')
opt5El7.textContent = asabenehChallenges2020.challenges[3].topics[6]

detail5.append(summary5)
detail5.appendChild(opt5El1)
detail5.appendChild(opt5El2)
detail5.appendChild(opt5El3)
detail5.appendChild(opt5El4)
detail5.appendChild(opt5El5)
detail5.appendChild(opt5El6)
detail5.appendChild(opt5El7)
liEl[4].appendChild(detail5)

const status5 = document.createElement('p')
status5.textContent = asabenehChallenges2020.challenges[4].status
liEl[4].appendChild(status5)


// for sixth list
const sixthList = document.createElement('p')
sixthList.textContent = asabenehChallenges2020.challenges[5].name
liEl[5].appendChild(sixthList)

// for deatails and summary
const detail6 = document.createElement('details')
const summary6 = document.createElement('summary')
summary6.textContent = asabenehChallenges2020.challenges[5].name.slice(11,20)

const opt6El1 = document.createElement('p')
opt6El1.textContent = asabenehChallenges2020.challenges[5].topics[0]
const opt6El2 = document.createElement('p')
opt6El2.textContent = asabenehChallenges2020.challenges[5].topics[1]
const opt6El3 = document.createElement('p')
opt6El3.textContent = asabenehChallenges2020.challenges[5].topics[2]
const opt6El4 = document.createElement('p')
opt6El4.textContent = asabenehChallenges2020.challenges[5].topics[3]
const opt6El5 = document.createElement('p')
opt6El5.textContent = asabenehChallenges2020.challenges[5].topics[4]
const opt6El6 = document.createElement('p')
opt6El6.textContent = asabenehChallenges2020.challenges[5].topics[5]
const opt6El7 = document.createElement('p')
opt6El7.textContent = asabenehChallenges2020.challenges[5].topics[6]

detail6.append(summary6)
detail6.appendChild(opt6El1)
detail6.appendChild(opt6El2)
detail6.appendChild(opt6El3)
detail6.appendChild(opt6El4)
detail6.appendChild(opt6El5)
detail6.appendChild(opt6El6)
detail6.appendChild(opt6El7)
liEl[5].appendChild(detail6)

const status6 = document.createElement('p')
status6.textContent = asabenehChallenges2020.challenges[5].status
liEl[5].appendChild(status6)


// for seventh list
const seventhList = document.createElement('p')
seventhList.textContent = asabenehChallenges2020.challenges[6].name
liEl[6].appendChild(seventhList)

// for deatails and summary
const detail7 = document.createElement('details')
const summary7 = document.createElement('summary')
summary7.textContent = asabenehChallenges2020.challenges[6].name.slice(11,24)

const opt7El1 = document.createElement('p')
opt7El1.textContent = asabenehChallenges2020.challenges[6].topics[0]
const opt7El2 = document.createElement('p')
opt7El2.textContent = asabenehChallenges2020.challenges[6].topics[1]
const opt7El3 = document.createElement('p')
opt7El3.textContent = asabenehChallenges2020.challenges[6].topics[2]
const opt7El4 = document.createElement('p')
opt7El4.textContent = asabenehChallenges2020.challenges[6].topics[3]
const opt7El5 = document.createElement('p')
opt7El5.textContent = asabenehChallenges2020.challenges[6].topics[4]
const opt7El6 = document.createElement('p')
opt7El6.textContent = asabenehChallenges2020.challenges[6].topics[5]
const opt7El7 = document.createElement('p')
opt7El7.textContent = asabenehChallenges2020.challenges[6].topics[6]

detail7.append(summary7)
detail7.appendChild(opt7El1)
detail7.appendChild(opt7El2)
detail7.appendChild(opt7El3)
detail7.appendChild(opt7El4)
detail7.appendChild(opt7El5)
detail7.appendChild(opt7El6)
detail7.appendChild(opt7El7)
liEl[6].appendChild(detail7)

const status7 = document.createElement('p')
status7.textContent = asabenehChallenges2020.challenges[6].status
liEl[6].appendChild(status7)


// for eighth list
const eighthList = document.createElement('p')
eighthList.textContent = asabenehChallenges2020.challenges[7].name
liEl[7].appendChild(eighthList)

// for deatails and summary
const detail8 = document.createElement('details')
const summary8 = document.createElement('summary')
summary8.textContent = asabenehChallenges2020.challenges[7].name.slice(11,27)

const opt8El1 = document.createElement('p')
opt8El1.textContent = asabenehChallenges2020.challenges[7].topics[0]
const opt8El2 = document.createElement('p')
opt8El2.textContent = asabenehChallenges2020.challenges[7].topics[1]
const opt8El3 = document.createElement('p')
opt8El3.textContent = asabenehChallenges2020.challenges[7].topics[2]
const opt8El4 = document.createElement('p')
opt8El4.textContent = asabenehChallenges2020.challenges[7].topics[3]
const opt8El5 = document.createElement('p')
opt8El5.textContent = asabenehChallenges2020.challenges[7].topics[4]
const opt8El6 = document.createElement('p')
opt8El6.textContent = asabenehChallenges2020.challenges[7].topics[5]
const opt8El7 = document.createElement('p')
opt8El7.textContent = asabenehChallenges2020.challenges[7].topics[6]

detail8.append(summary8)
detail8.appendChild(opt8El1)
detail8.appendChild(opt8El2)
detail8.appendChild(opt8El3)
detail8.appendChild(opt8El4)
detail8.appendChild(opt8El5)
detail8.appendChild(opt8El6)
detail8.appendChild(opt8El7)
liEl[7].appendChild(detail8)

const status8 = document.createElement('p')
status8.textContent = asabenehChallenges2020.challenges[7].status
liEl[7].appendChild(status8)


const h3El = document.createElement('h3')
h3El.textContent = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
h3El.style.textAlign = 'center'
h3El.style.fontWeight = 'bold'
h3El.style.fontSize = '2rem'
mainEl.appendChild(h3El)

const social = document.createElement('div')
social.style.display = 'flex'
social.style.justifyContent = 'space-between'
social.style.width = '30%'
social.style.margin = '0 auto 1rem'
for(i=0; i<3; i++){
const iconSocio = document.createElement('span')
iconSocio.innerHTML = asabenehChallenges2020.author.socialLinks[i].social
social.appendChild(iconSocio)
}
mainEl.appendChild(social)

const h1El2 = document.createElement('h1')
h1El2.textContent = asabenehChallenges2020.author.bio
h1El2.style.fontSize = '1rem'
h1El2.style.fontWeight = '400'
h1El2.style.width = '80%'
h1El2.style.margin = 'auto'
h1El2.style.textAlign = 'center'
mainEl.appendChild(h1El2)


// for title 
const newDivEl = document.createElement('div')
newDivEl.style.display = 'grid'
newDivEl.style.gridTemplateColumns = '1fr 1fr 1fr'
newDivEl.style.gap = '1rem'
newDivEl.style.marginTop = '3rem'

const blkaEl = document.createElement('div')
const blkaH1 = document.createElement('h1')
blkaH1.textContent = 'Titles'
blkaH1.style.fontSize = '1.5rem'

const blkapEl = document.createElement('p')
for(i=0; i<asabenehChallenges2020.author.titles.length; i++){
const blkapEl2 = document.createElement('p')
blkapEl2.textContent += asabenehChallenges2020.author.titles[i][0] +
"" 
+asabenehChallenges2020.author.titles[i][1]
blkapEl2.style.lineHeight = '0.8rem'
blkapEl.appendChild(blkapEl2)
}

blkaEl.appendChild(blkaH1)
blkaEl.appendChild(blkapEl)
newDivEl.appendChild(blkaEl)

// for skills
const blkbEl = document.createElement('div')
const blkbH1 = document.createElement('h1')
blkbH1.textContent = 'skills'
blkbH1.style.fontSize = '1.5rem'

const blkbpEl = document.createElement('p')
for(i=0; i<asabenehChallenges2020.author.skills.length; i++){
const blkbpEl2 = document.createElement('p')
blkbpEl2.textContent += asabenehChallenges2020.author.skills[i]
blkbpEl2.style.lineHeight = '0.8rem'
blkbpEl.appendChild(blkbpEl2)
}

blkbEl.appendChild(blkbH1)
blkbEl.appendChild(blkbpEl)
newDivEl.appendChild(blkbEl)

// for Qualifications
const blkcEl = document.createElement('div')
blkcEl.style.direction ='block'
const blkcH1 = document.createElement('h1')
blkcH1.textContent = 'Qualifications'
blkcH1.style.fontSize = '1.5rem'

const blkcpEl = document.createElement('p')
for(i=0; i<asabenehChallenges2020.author.qualifications.length; i++){
const blkcpEl2 = document.createElement('p')
blkcpEl2.textContent += asabenehChallenges2020.author.qualifications[i]
blkcpEl2.style.lineHeight = '0.8rem'
blkcpEl.appendChild(blkcpEl2)
}


blkcEl.appendChild(blkcH1)
blkcEl.appendChild(blkcpEl)
newDivEl.appendChild(blkcEl)

mainEl.appendChild(newDivEl)

const keyEl = document.createElement('h1')
keyEl.textContent = 'Keywords'
keyEl.style.fontSize = '1.5rem'
keyEl.style.margin = '2rem'

const keyPEl = document.createElement('div')
keyPEl.style.display = 'flex'
keyPEl.style.flexWrap = 'wrap'
keyPEl.style.justifyContent = 'space-between'
for(i=0; i<asabenehChallenges2020.keywords.length; i++){
const keyPEl2 = document.createElement('p')
keyPEl2.textContent = `#${asabenehChallenges2020.keywords[i]}`
keyPEl2.style.width = 'max-content'
keyPEl2.style.padding = '0.5rem 2rem 0.5rem 1rem'
keyPEl2.style.fontSize = '1rem'
keyPEl2.style.marginBottom = '0'
keyPEl2.style.borderRadius = '15px'
keyPEl2.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
keyPEl.appendChild(keyPEl2)
}
keyEl.appendChild(keyPEl)

mainEl.appendChild(keyEl)

// console.log(asabenehChallenges2020.keywords.length) 35