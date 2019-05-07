const hof = (fn) => fn(5);
hof(function a(x) {return x});

const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }

}

const incrementFn = closure();
console.log(incrementFn());