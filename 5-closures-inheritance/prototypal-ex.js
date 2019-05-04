Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
}

const lastYear = new Date('1992-10-10').lastYear();
console.log(lastYear)


Array.prototype.map = function() {
  let arr = [];
  for(let i = 0; i < this.length; i ++) {
    arr.push((this[i] + ' ^_^'))
  }
  return arr;
}

console.log([1, 2, 3, 4].map());
