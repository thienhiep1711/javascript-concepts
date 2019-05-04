
const elfFunction = {
  attack() {
    return console.log('attack with ' + this.weapon);
  },
  incre() {
    return console.log('incre with ' + this.name);
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunction)
  console.log(newElf.__proto__)
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf('Peter', 'stones');
peter.attack();
const adam = createElf('Hiep', 'Nguyen');
adam.attack();