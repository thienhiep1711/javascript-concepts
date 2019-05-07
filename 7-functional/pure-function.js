//no side effects
//input => output

const array = [1, 2, 3];
function mutateArray (arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(3);
  })
}

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.push(5);
  return newArray;
}

function mutiplyBy2(arr) {
  return arr.map(item => item*2);
}


// mutateArray(array);
// console.log(array);
// mutateArray2(array);
// console.log(array)
removeLastItem(array);
console.log(array);
console.log(removeLastItem(array))
console.log(mutiplyBy2(array))