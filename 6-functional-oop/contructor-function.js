function Elf(name, weapon) {
    console.log('this', this);
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return `${this.name} attack with ${this.weapon}`
}
Elf.prototype.kiss = function () {
    const self = this;
    function kissing() {
        return `${self.name} kiss with ${self.weapon}`
    }
    return kissing();
}

const peter = new Elf('Nguyen Thien Hiep', 'gun');
console.log(peter);
const dan = new Elf('Nguyen Thien Huy', 'bomb');
// console.log(peter.prototype);
console.log(peter.attack())
console.log(peter.kiss())