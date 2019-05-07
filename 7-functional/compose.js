//Compose
const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) =>  num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
const multiplyBy3AndAbsolute2 = pipe(multiplyBy3, makePositive);
console.log(multiplyBy3AndAbsolute(-100));
console.log(multiplyBy3AndAbsolute2(-20))

// Pipe

