const multiply = (a, b, c) => a*b*c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;
const curriedMultiply5 = curriedMultiply(5)(4);


console.log(curriedMultiply5(10))
console.log(curriedMultiply5(100))
console.log(curriedMultiply5(1000004))

const curriedMultiply7 = multiply.bind(null, 7);
console.log(curriedMultiply7(4, 10))