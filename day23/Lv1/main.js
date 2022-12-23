const bodyEl = document.querySelector('body')
bodyEl.style.width = '70%'
bodyEl.style.margin = 'auto'
// bodyEl.style.textAlign = 'center'

const titleEl = document.createElement('h1')
titleEl.textContent = 'Number Generator'
titleEl.style.color = 'green'

const subtiEl = document.createElement('p')
subtiEl.textContent = '30DaysOfJavaScript:DOM DAY 3'

const authorEl = document.createElement('p')
authorEl.textContent = 'Asabeneh Yetayeh'

const mainEl = document.createElement('div')
// mainEl.style.width = '50%'
mainEl.style.margin = 'auto'
mainEl.style.display = 'grid'
mainEl.style.gridTemplateColumns = 'repeat(8, 1fr)'
// mainEl.style.height = '130vh'
mainEl.style.gridGap = '1rem'

for(i=0; i<=1000; i++){
    const numberEl = document.createElement('p')
    numberEl.textContent = i
    numberEl.style.background = 'red'
    numberEl.style.justifyContent = 'center'
    numberEl.style.textAlign = 'center'
    mainEl.appendChild(numberEl)
}

bodyEl.appendChild(titleEl)
bodyEl.appendChild(subtiEl)
bodyEl.appendChild(authorEl)

bodyEl.append(mainEl)