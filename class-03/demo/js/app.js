'use strict';

console.log('I am connected!!!');


// // we are going to ask the user for their name... if they don't answer, like they hit cancel or the don't don't type anything we are going to keep asking (while they don't give us a good answer we will keep asking!)
// // good habit is to read assignment opperator as 'has the value of' or 'gets' or 'gets the value of' 'to be'
// let userName = prompt('What is your name?');
// // if (blah === blah blah blah)
// console.log(userName);
// // userName === null
// // userName === ''
// // while (!userName) {
// //   //do something;
// // }
// while (userName === null || userName === '' || userName === 'false') {
//   // get a new user name, ask them again!!
//   userName = prompt('Sorry, I didn\'t get that! Try again. What is your name?');
//   console.log(userName);
// }

// if (userName !== 'mickey mouse') {
//   alert('I was hoping for someone else...');
// }

// alert('Hi ' + userName + ', thanks for visiting.');

// Array methods and properties
let snackArray = ['dole whip', 'pickles'];
console.log(snackArray);

// to add a new value to the END of my array
// name of the array . the push method
snackArray.push('mickey pretzel');
console.log(snackArray);

// to add an item to the beginning of the array use unshift
snackArray.unshift('hungry bear beyond burger');
console.log(snackArray);

console.log(snackArray.indexOf('pickles'));

// check out splice() in your free time to remove values

// for (let index = 0; index < snackArray.length; index++) {
//   console.log(snackArray[index]);
// }

// ask my user to guess one of my favorite snacks

let userGuess = prompt('Can you guess one of my favorite snacks?');

for (let index = 0; index < snackArray.length; index++) {
  let currentSnack = snackArray[index];
  console.log('is ' + userGuess + ' === ' + currentSnack);
  if (userGuess === currentSnack) {
    alert('you got it!');
  }
  // else we won't do anything
}

// give users multiple chances to guess
// a way to count how many guesses they have
let attempts = 0;
// a way to know if they got the answer right??
let correctAnswer = false;
// a list of potential correct answers
let favoriteTeams = ['coyotes', 'jaguars', 'bengals'];

// outer loop keeps track of how many times they have attempted to answer our question and it will stop if they run out of guesses OR if they get it right
while (attempts < 5 && correctAnswer === false) {
  // each time we start the loop I will allow them a new guess
  let team = prompt('guess what team it is?');
  // at this point their guess is living in the variable team

  // check all of my teams to find out if they guessed correctly
  for (let i = 0; i < favoriteTeams.length; i++) {
    let currentTeam = favoriteTeams[i];
    if (team === currentTeam) {
      // return true
      alert('you got it!');
      correctAnswer = true; // correct answer is called a flag
    }
  }
  // they used an attempt
  attempts++;
  // if their was not correct I will tell them
  if (correctAnswer === false) {
    alert('incorrect please guess again!');
  }
}
