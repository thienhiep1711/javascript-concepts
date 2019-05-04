function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son';
      return console.log(`${grandpa} > ${father} > ${son}`)
    }
   }
}

a()()();

const boo = (string) => (name) => (name2) => console.log(`${string} > ${name} > ${name2}`);

const booString = boo('Hi');

const booStringName = booString('Ha')

booStringName('Hehe')

boo('Hiep')('Nguyen')('Thien');


function callMeMaybe() {
  const callMe = 'Hi! I am now here!';
  setTimeout(function() {
    console.log(callMe);
  }, 5000);
}

// callMeMaybe();

function heavyDuty(index) {
  const bigArray = new Array(5000).fill("Hello " + index);
  console.log('Created')
  return bigArray[index];
}

console.log(heavyDuty(5))
console.log(heavyDuty(543))
console.log(heavyDuty(1111))
console.log(heavyDuty(3))
console.log(heavyDuty(234))
console.log(heavyDuty(999))


function heavyDuty2() {
  const bigArray = new Array(5000).fill("Hello ");
  console.log('Created Again')
  return function(index) {
    return bigArray[index]
  };
}

const getHeavyDuty = heavyDuty2();

console.log(getHeavyDuty(4))
console.log(getHeavyDuty(1111))
console.log(getHeavyDuty(3))
console.log(getHeavyDuty(234))
console.log(getHeavyDuty(999))