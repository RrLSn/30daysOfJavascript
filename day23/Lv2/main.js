bodyEl = document.querySelector('body')
bodyEl.style.width = '100vw'
bodyEl.style.height = '100vh'
bodyEl.style.display = 'flex'
bodyEl.style.justifyContent = 'center'
bodyEl.style.alignItems = 'center'

const mainEl = document.createElement('div')
mainEl.style.width = '40%'
mainEl.style.height = '7rem'
mainEl.style.boxShadow = '0 0 0.5rem 0 gray'

bodyEl.append(mainEl)