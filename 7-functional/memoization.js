function addTo80(n) {
  console.log('Long time')
  return n + 80;



}


function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time!')
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memized = memoizedAddTo80();
console.log(memized(5))
console.log(memized(3))
console.log(memized(4))
console.log(memized(6))
console.log(memized(7))
console.log(memized(8))
console.log(memized(9))