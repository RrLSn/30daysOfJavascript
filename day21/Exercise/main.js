// Exercise 1

// 1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const firstParah = document.querySelector('p')
console.log(firstParah)

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
let firstID = document.querySelector('#one')
console.log(firstID)

let secondID = document.querySelector('#two')
console.log(secondID)

let thirdID = document.querySelector('#three')
console.log(thirdID)

let fourthID = document.querySelector('#four')
console.log(fourthID)

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let nodeList = document.querySelectorAll('p')
console.log(nodeList)

// 4. Loop through the nodeList and get the text content of each paragraph
for(let i=0; i<nodeList.length; i++){
    console.log(nodeList[i])
}

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph


nodeList[3].textContent = 'Fourth Paragraph'
console.log(nodeList[3])

// 6.Set id and class attribute for all the paragraphs using different attribute setting methods

nodeList[0].className = "firstparah"
nodeList[0].id = "First"
console.log(nodeList[0])

nodeList[1].setAttribute('class', 'secondparah')
nodeList[1].setAttribute('id', 'second')
console.log(nodeList[1])

nodeList[2].setAttribute('class', 'fourthparah')
nodeList[2].setAttribute('id', 'fourth')
console.log(nodeList[2])

nodeList[3].className = 'thirdparah'
nodeList[3].id = 'third'
console.log(nodeList[3])



// Exercise 2
// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
for(let i=0; i<nodeList.length; i++){
    nodeList[i].style.color = '#ffffff'
    nodeList[i].style.background = 'blue'
    nodeList[i].style.border = '0.5rem solid black'
    nodeList[i].style.fontSize = '5rem'
    nodeList[i].style.fontFamily = 'monospace'
}


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

for(let i=0; i<nodeList.length; i++){
    if(i % 2 === 0){
        nodeList[i].style.color = 'green'
    } else{
        nodeList[i].style.color = 'red'
    }
}

// 3. Set text content, id and class to each paragraph

nodeList[0].textContent = 'First Paragraph'
console.log(nodeList[0])

nodeList[1].textContent = 'Second Paragraph'
console.log(nodeList[1])

nodeList[2].textContent = 'third Paragraph'
console.log(nodeList[2])

