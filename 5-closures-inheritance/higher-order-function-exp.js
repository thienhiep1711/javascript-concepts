const mutiplyBy = function(num1) {
  return function(num2) {
    return num1*num2
  }
}

const mutiplyByTwo = mutiplyBy(3);
mutiplyByTwo(4);
console.log(mutiplyByTwo(100))