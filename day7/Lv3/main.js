// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    x = Math.floor(Math.random()*256)
    y = Math.floor(Math.random()*256)
    z = Math.floor(Math.random()*256)
    console.log(`rgb(${x},${y},${z})`)
}

rgb(161,43,103)

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args){
    sum = 0
    for(i=0; i<=args.length-1; i++){
        sum+=args[i]
    }
    console.log(sum)
}
sum(5,8,9,0,4,4)
