const bodyEl = document.querySelector('body')
// bodyEl.style.textAlign ='center'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.width = '100vw'
// bodyEl.style.height = '100vh'
bodyEl.style.overflow = 'hidden'
bodyEl.style.cursor = 'pointer'


const h1El = document.createElement('h1')
h1El.textContent = 'Number Generator'
h1El.style.fontWeight = '500'
h1El.style.width = 'max-content'
h1El.style.margin = 'auto'
bodyEl.appendChild(h1El)

const h2El = document.createElement('h2')
h2El.textContent = '30DaysOfJavaScript:DOM Day 2'
h2El.style.textDecoration = 'underline'
h2El.style.fontWeight = '500'
h2El.style.width = 'max-content'
h2El.style.margin = 'auto'
bodyEl.appendChild(h2El)

const h3El =  document.createElement('h3')
h3El.textContent = 'Author: Afolabi Sodiq'
h3El.style.textDecoration = 'underline'
h3El.style.margin = 'auto'
h3El.style.width = 'max-content'
bodyEl.appendChild(h3El)

const divEl = document.createElement('div')
bodyEl.appendChild(divEl)
// for(let i=0; 1<100; i++){
//     const h1El = document.createElement('h1')
//     h1El.textContent = `${i + 1}`
//     divEl.appendChild(h1El)
// }