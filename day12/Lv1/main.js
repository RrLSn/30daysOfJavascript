//  1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const annualIncome = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const patternA = /\d{4,5}/g
const addition = annualIncome.match(patternA)
console.log(Number(addition[0])+Number(addition[1])+Number(addition[2]))


// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const words = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const patterN = /-?[0-9]/g
const points = words.match(patterN)
console.log(points)

const sortedPoints = points.sort((a,b) => a-b)
console.log(sortedPoints)


// 3. Write a pattern which identify if a string is a valid JavaScript variable
const isValid = (variable) => {
    const variable = 'Afolabi'
    if(variable.includes('_')){
        return true
    } else if(variable.includes('-')){
        return false
    } else if(variable.startsWith('number')){
        return true
    }else{
        return true
    }
}

isValid()

