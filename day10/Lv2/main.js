const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1. Find a union b
const AunionB = new Set([...a, ...b])
console.log(AunionB)

// 2. Find a intersection b
bSet = new Set(b)
const intersect = a.filter((num) => bSet.has(num))
console.log(new Set(intersect))

// 3. Find a with b
const aWithB = new Set(b)
const APlusb = a.filter((num) => !aWithB.has(num))
console.log(APlusb)