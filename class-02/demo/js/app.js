'use strict';

console.log('hello world');

// ask some questions that would lead to different responses

let disneylandOriginal = prompt('Have you ever been to Disneyland?');
console.log(disneylandOriginal);
let disneyland = disneylandOriginal.toLowerCase();
//.toUpperCase()
console.log(disneyland);
// if they say yes lets say: great me too!
// - yes is ok in any case, y is ok in any case
// if negative - you NEED to go to Disneyland
// no or n
// if they don't give yes or no lets say- How great for you, moving on...

if (disneyland === 'yes' || disneyland === 'y') {
  alert('Great! Me too.')
} else if (disneyland === 'no' || disneyland === 'n') {
  alert('you NEED to go to Disneyland');
} else {
  alert('How great for you... moving on...')
}

// lets ask a question involving numbers
// prompts ALWAYS return strings

let funLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was disneyland when you went.');

console.log(typeof funLevel);

let funNumber = parseInt(funLevel);
// let funNumber = Number(funLevel)

// switch statement
switch (funNumber) {
  case 1:
    alert('I am sorry, you should definitely go again');
    break;
  case 2:
    alert('Did you even try a pickle? Shouldn\'t have eaten that Turkey leg!');
    break;
  case 3:
    alert('That is what I like to hear! When are we going back?!');
    break;
  default:
    alert('Let me plan your next trip');
}