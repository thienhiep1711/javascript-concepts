const array = [1,3, 5, 7, 10, 20];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num *2)
})
console.log('For each:' ,double)

// map, filter, reduce
const mapArray = array.map((item) => item*3);
console.log('Maps: ',mapArray)

const filterItemOfArray = array.filter((item) => item > 10);
console.log('Filter:', filterItemOfArray);

const reduceArray =  array.reduce((accumulator, num)  => {
  return accumulator + num;
}, 1)

console.log('Reduce:' , reduceArray);