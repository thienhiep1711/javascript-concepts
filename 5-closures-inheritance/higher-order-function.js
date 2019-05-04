const giveAccessTo = (name) => {
  return console.log('Access Geanted to ' + name)
}

function authenticate(verify) {
  let array = [];
  for (let  i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return console.log('la la la my name is '+ person.name);
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(person);
  } else if (person.level === 'user' ) {
    fn(person);
  }
}

letPerson({level:'user', name: 'Tim'}, sing)