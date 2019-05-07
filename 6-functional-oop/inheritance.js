class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;


  }
  attack() {
    return 'attack with ' + this.weapon;
  }
  boom() {
    return 'boom boom from '+ this.name;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }

  domb() {
    return 'Domb' + this.name + this.weapon + this.type;
  }
}

class ElfSub extends Elf {
  constructor(name, weapon, type, mode) {
    super(name, weapon, type);
    this.mode = mode;
  }

  hardMode() {
    return `${this.name} -  ${this.weapon} - ${this.type} - ${this.mode}`
  }
}

const fiona = new Character('Fiona', 'gun')
console.log(fiona.attack())
const mike = new Elf('Mike', 'stones', 'orc');
console.log(mike.domb())
const dave = new ElfSub('Dave', 'canon', 'sapeins', 'hard mode');
console.log(dave.hardMode());
console.log(Character.prototype.isPrototypeOf(Elf.prototype))
console.log(Elf.prototype.__proto__)
console.log(Character.prototype.__proto__)
console.log(mike instanceof Elf
  )