function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may eneter" : "Access Denied";
console.log(answer);
var automatedAwser = "Your account # is " + (isUserValid(false) ? "1234" : 'Not availible');
console.log(automatedAwser)

function condition() {
  if(isUserValid(false)) {
    return "You may enter";
  } else {
    return "Access denied";
  }
}

var answer2 = condition();
console.log(answer2)


function moveCommand(dirrection) {
  var whatHappens;
  switch (dirrection) {
    case 'forward':
      whatHappens = 'you encounter a monter'
      break;
    case 'back':
      whatHappens = 'you arrvied home'
      break;
    case 'right':
      whatHappens = 'you found a river';
      break;
    default:
      whatHappens = 'please eneter a valid dirrection';
  }
  return whatHappens;
}

var result = moveCommand('back');
console.log(result)