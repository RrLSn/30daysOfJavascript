// Declaring regular expression with global flag and case insensitive flag.
const pattern = 'love'
const flags = 'gi'
const regEx = new RegExp(pattern, flag)

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
regEx = new RegExp('love','gi')

// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.
 regEx= /love/gi

//  Testing for a match
//  test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const patternA = /JavaScript/
const result = patternA.test(str)
console.log(result) //true

// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const patternB = /love/
const resultB = str.match(patternB)
console.log(resultB) //['love', index: 2, input: 'I love JavaScript', groups: undefined]

const p = /love/g
const rB = str.match(p)
console.log(rB)  //['love']

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const patternC = /JavaScript/g
const resultC = str.search(patternC)
console.log(resultC)  //7

const pC = /love/g
const rC = str.match(pC)
console.log(rC)      //2

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const text = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

textReplaced = text.replace(/Python|python/,'JavaScript')
console.log(textReplaced)  //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

        //  0R

pattern1 = /Phython/gi
textReplacedA = text.replace(pattern1,'JavaScript')
console.log(textReplacedA)  //Python is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

            // 0R
textReplacedB = text.replace(/[Pp]ython/g, 'JavaScript')
console.log(textReplacedB)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

newTxt = txt.replace(/%/,'')
console.log(newTxt)

newTxtA = txt.replace(/%/g, '')
console.log(newTxtA)

// Square Bracket
// Let's use square bracket to include lower and upper case
textReplacedB = text.replace(/[Pp]ython/g, 'JavaScript')
console.log(textReplacedB)

const txtA = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const patternD = /[Aa]pple/g
textA = txtA.match(patternD)
console.log(textA)  // ['Apple', 'apple']

// If we want to look for the banana, we write the pattern as follows:

const pattern0 = /[Aa]pple|[Bb]anana/g
textA = txtA.match(pattern0)
console.log(textA) //['Apple', 'banana', 'apple', 'banana']

// Escape character(\) in RegExp
const txt0 = 'This regular expression example was made in January 12,  2020 400400.'
const pattern2 = /\d/g      //d is a special character which means digits
console.log(txt0.match(pattern2))  //['1', '2', '2', '0', '2', '0']

const pattern2A = /\d+/g   // d is a special character which means digits
console.log(txt0.match(pattern2A))  // ['12', '2020']

// One or more times(+)
 pattern2A = /\d+/g   // d is a special character which means digits
console.log(txt0.match(pattern2A))  // ['12', '2020']

// Period(.)
const txt1 = 'Apple and banana are fruits'
const pattern3 = /[a]./g
console.log(txt1.match(pattern3))  // ['an', 'an', 'an', 'a ', 'ar']

const pattern3A = /[a].+/g
console.log(txt1.match(pattern3A))   //['and banana are fruits']
const pattern3B = /[a].+/gi //or /[Aa].+/g
console.log(txt1.match(pattern3B))  //['Apple and banana are fruits']

// Zero or more times(*)
// Zero or many times. The pattern may not occur or it can occur many times.
 txtA = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
 const Pattern4 = /[Aa]./g
 console.log(txtA.match(Pattern4))  //['Ap', 'an', 'an', 'an', 'a ', 'ar', 'An', 'ay', 'an', 'ap', 'a ', 'ay', 'ay', 'as', 'ac', 'a ', 'an', 'an', 'a ', 'a ', 'ay', 'ar', 'ar', 'aw', 'ay']

 const Pattern4A = /[Aa].*/g
 console.log(txtA.match(Pattern4A)) //['Apple and banana are fruits. An old cliche says an…by a banana a day keeps the doctor far far away. ']


//  Zero or one times(?)
// Zero or one times. The pattern may not occur or it may occur once.
// ? means optional
const txtB = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern5A = /[Ee]-mail/g
console.log(txtB.match(pattern5A)) //['e-mail', 'E-mail']

const pattern5 = /[Ee]-?mail/g
console.log(txtB.match(pattern5)) // ['e-mail', 'email', 'Email', 'E-mail']

// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how ot use RegExp quantifiers. Imagine, we are interested in substring that their length are 4 characters
