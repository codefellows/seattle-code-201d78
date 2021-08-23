'use strict';

console.log('hi');

// US: we have a goat rescue that we are trying to get donations for so we are doing a fun social media experiment to draw people to our webside in hope that that they donate. Esentially we will show differnt pictures of goats and let the users choose between their favorites to decide which goat reign supreme

// we need a way to display goats - singular goats displayed with a prototype method| DONE
// global function for displaying 2 goats| DONE
// goat objects| DONE
// an array of goats| DONE
// we need a way to determine which picture they click on
// we need a counter for the goats we picks - on the goat object | DONE
// we need a randomizer for choosing which goats to display | DONE
// event listen for click
// clickHandler
// logic to update a global counter  | halfway done

// ------------------------ Global Variables ------------------------ //

const leftGoatImgElem = document.getElementById('left_goat_img');
const leftGoatPElem = document.getElementById('left_goat_p');
const rightGoatImgElem = document.getElementById('right_goat_img');
const rightGoatPElem = document.getElementById('right_goat_p');
const allGoatsSectionElem = document.getElementById('all_goats')

let leftGoat = null; 
let rightGoat = null;

let rounds = 10;

// ------------------------- Constructor Function ------------------------ //

function Goat(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;
  // maybe the constructor function should olny include things that describe a goat, and no additional outside behaviors
  // kiss go ahead and keep using this method below
  // Goat.allGoats.push(this);
}


// ------------------------- Prototype things ------------------------ //
Goat.allGoats = [];

// create a ptf that renders a single goat to the page
// allow two parameters - image reference variable, and a p tag refererence variable
Goat.prototype.renderSingleGoat = function(img, p) {
  img.src = this.image;
  // <img src="whatever we put here">
  p.textContent = this.name;
  this.timesShown++;
}


// ------------------------- Global Functions ------------------------ //

// function that gets random goats
// assigns the goats to the left and right variable
// left and right cannot be the same
// renders the goats
function randomGoats() {
  let leftIndex = Math.floor(Math.random() * Goat.allGoats.length);

  leftGoat = Goat.allGoats[leftIndex];
  let rightIndex;
  while (rightIndex === undefined || rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * Goat.allGoats.length);
  }
  rightGoat = Goat.allGoats[rightIndex];

  // render the goats
  renderTwoGoats(leftGoat, rightGoat);
}

// a function that renders two goats
function renderTwoGoats(leftGoat, rightGoat) {
  leftGoat.renderSingleGoat(leftGoatImgElem, leftGoatPElem);
  rightGoat.renderSingleGoat(rightGoatImgElem, rightGoatPElem);
}

function clickHandler(event) {
  // only need to prevent default on forms
  console.log(event.target);
  // we only accept items with id of left_goat_img and right_goat_img
  // is the lelement the leftGoatImgElem or rightGoatImgElem
  if (event.target === leftGoatImgElem || event.target === rightGoatImgElem) {
    // count down on voting rounds
    rounds--;
    // figure out which goat they clicked on and update the votes
    if (event.target === leftGoatImgElem) {
      // increment votes for my left goat
      leftGoat.votes++;
    } else {
      rightGoat.votes++;
    }
    if (rounds === 0) {
      // turn off listener
      allGoatsSectionElem.removeEventListener('click', clickHandler);
      // render results
      renderResults();
      // alert('all done');
    }
    // if they made it to zero rounds lets turn off the ability to vote and render results
    // get two new random goats
    randomGoats();
  }
}

function renderResults() {
  const ulElem = document.getElementById('goat-clicks');
  ulElem.innerHTML = '';
  for (let goat of Goat.allGoats) {
    const liElem = document.createElement('li');
    liElem.textContent = `${goat.name}: ${goat.votes}`;
    ulElem.appendChild(liElem);
    //`${expression to be evaluated} then we can just write text as normal and finish with a backtick` 
  }

  // for (let i = 0; i < Goat.allGoats.length; i++) {
  //   let goat = Goat.allGoats[i];
  //   const liElem = document.createElement('li');
  //   liElem.textContent = `${goat.name}: ${goat.votes}`;
  //   ulElem.appendChild(liElem);
  // }
}

// function makeAGoat(name, image) {
//   let myGoat = new Goat(name, image);
//   Goat.allGoats.push(myGoat);
//   // update storage every time I make a goat
// }

// ------------------------- Listeners ------------------------ //

allGoatsSectionElem.addEventListener('click', clickHandler);

// ------------------------- Call Functions -------------------------- //
Goat.allGoats.push(new Goat('Cruising Goat', './images/cruisin-goat.jpg'));
Goat.allGoats.push(new Goat('Float Your Goat', './images/float-your-goat.jpg'));
Goat.allGoats.push(new Goat('Goat Away', './images/goat-away.jpg'))
Goat.allGoats.push(new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg'));
Goat.allGoats.push(new Goat('Kissing Goat', './images/kissing-goat.jpg'));
Goat.allGoats.push(new Goat('Sassy Goat', './images/sassy-goat.jpg'));
Goat.allGoats.push(new Goat('Sweater Goat', './images/sweater-goat.jpg'));
Goat.allGoats.push(new Goat('Smiling Goat', './images/smiling-goat.jpg'));


/// when do we do this? When we have completed a vote and we need two fresh goats!
// also we want get two random goats on page load and call render two goats on our random goats
// renderTwoGoats(leftGoat, rightGoat);

randomGoats();