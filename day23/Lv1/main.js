const bodyEl = document.querySelector('body')
bodyEl.style.width = '70%'
bodyEl.style.margin = 'auto'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.textAlign = 'center'

const titleEl = document.createElement('h1')
titleEl.textContent = 'Number Generator'
titleEl.style.fontWeight = '500'
titleEl.style.color = '#5bbc7a'

const subtiEl = document.createElement('p')
subtiEl.textContent = '30DaysOfJavaScript:DOM DAY 3'

const authorEl = document.createElement('p')
authorEl.textContent = 'Asabeneh Yetayeh'

bodyEl.appendChild(titleEl)
bodyEl.appendChild(subtiEl)
bodyEl.appendChild(authorEl)

const divEl = document.createElement('div')
divEl.style.display = 'flex'
divEl.style.width = '65%'
divEl.style.height = '2.5rem'
divEl.style.margin = 'auto'
divEl.style.gap = '1rem'

const inputEl = document.createElement('input')
inputEl.style.width = '41rem'
inputEl.style.border = '0.1rem solid #5bbc7a'
inputEl.style.cursor = 'pointer'
divEl.appendChild(inputEl)

const generateEl = document.createElement('div')
generateEl.style.width = '10rem'
generateEl.textContent = 'Generate numbers'
generateEl.style.background = '#5bbc7a'
generateEl.style.color = '#fff'
generateEl.style.display = 'flex'
generateEl.style.alignItems = 'center'
generateEl.style.justifyContent = 'center'
generateEl.style.cursor = 'pointer'
divEl.appendChild(generateEl)
bodyEl.append(divEl)


const mainEl = document.createElement('div')
mainEl.style.display = 'grid'
mainEl.style.gridTemplateColumns = 'repeat(9, 1fr)'
mainEl.style.gridGap = '0.5rem'

function isPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n == 2) {
      return true;
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 1) {
        return true;
      }
  }    
}

for(i=0; i<=1000; i++){
    const numberEl = document.createElement('p')
    numberEl.textContent = i
    numberEl.style.height = '100%'
    numberEl.style.color = '#ffffff'
    numberEl.style.fontSize = '2rem'
    numberEl.style.display = 'flex'
    numberEl.style.justifyContent = 'center'
    numberEl.style.fontWeight = 'bold'
    numberEl.style.alignItems = 'center'
    if(i%2 === 0){
        numberEl.style.background = 'green'
    }else if(isPrime(i)){
        numberEl.style.background = 'red'
    } else{
        numberEl.style.background = 'yellow'
    }
    mainEl.appendChild(numberEl)
}

bodyEl.append(mainEl)