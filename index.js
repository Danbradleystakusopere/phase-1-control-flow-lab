function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  }
  if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  if (feet > 2500) {
    return 'No can do.';
  }
  if (feet > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}



function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
}

function switchOnCharmFromTip(){
  switch (arguments[0]) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

  
}