// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(param){
result = param.replace(/[@%&$;#!?]/g, '')
console.log(result)
}

cleanText(sentence)