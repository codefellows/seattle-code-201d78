'use strict';

console.log('hello world');

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of java script... he can make objects

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show
// age, color, breed, picture, bio - interests, can be place with dogs? cats? kids? name
// name
// age with a function
// color
// interests []
// isGoodWithDogs
// isGoodWithCats
// isGoodWithKids
// photo


const kittenDiv = document.getElementById('kittenProfiles');


const frankie = {
  name: 'Frankie',
  age: null,
  interests: ['wet food', 'fish toy', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithKids: true,
  isGoodWithDogs: false,
  color: 'orange and white',
  photo: './images/frankie.jpeg',
  getAge: function() {
    this.age = `${_randomAge(3, 12)} months`; 
  }
}

const jumper = {
  name: 'Jumper',
  age: null,
  interests: ['dry food', 'crinkle toy', 'treats'],
  isGoodWithCats: true,
  isGoodWithKids: false,
  isGoodWithDogs: false,
  color: 'cinnamon toast/brindle',
  photo: './images/jumper.jpeg',
  getAge: function() {
    this.age = `${_randomAge(3, 12)} months`; 
  }
}

const serena = {
  name: 'Serena',
  age: null,
  interests: ['mice', 'lazers', 'scratching'],
  isGoodWithCats: false,
  isGoodWithKids: false,
  isGoodWithDogs: true,
  color: 'tiger stripe tabby',
  photo: './images/serena.jpeg',
  getAge: function() {
    this.age = `${_randomAge(3, 12)} months`; 
  }
}


// write a function that gets a random age 
function _randomAge(min, max) {
  // takes in a min and max age in months
  // runs a Math.random for min/max
  let number = Math.floor(Math.random() * (max - min) + min);
  // returns the age
  return number;
}
// serena.getAge();
// console.log(serena);

const kittenCaboodle = [frankie, jumper, serena];
// call getAge on all kittens at once
function getAllKittenAges() {
  //loops through the kitten caboodle and calls getAge on all kittens
  for (let i = 0; i < kittenCaboodle.length; i++) {
    let currentKitten = kittenCaboodle[i];
    currentKitten.getAge();
    console.log(`${currentKitten.name} is ${currentKitten.age} months old`);
  }
}

getAllKittenAges();

// put the kittens on the page
// use a function?
// <!-- <article>
//           <h2></h2>
//           <p></p>
//           <ul>
//             <li></li>
//           </ul>
//           <img>
//         </article> -->


// create the element
// potentially add content
// append the element to a parent

function renderKitten(kitten) {
  // takes in a kitten and puts it on the page
  // to create elements we use a method : createElement

  // create an article
  const articleElem = document.createElement('article');
  kittenDiv.appendChild(articleElem);
  // create an image
  const imgElem = document.createElement('img');
  imgElem.src = kitten.photo;
  articleElem.appendChild(imgElem);
  // create an h2  name
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);
  // h3 with color
  // create a p for age
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  // create a ul
  // loop through interests and add li for each interest
  for (let i = 0; i < kitten.interests.length; i++) {
    let currentInterest = kitten.interests[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

}

function renderAllKittens() {
  // loops through kitten array and calls render on each kitten
  for (let i = 0; i < kittenCaboodle.length; i++) {
    let currentKitten = kittenCaboodle[i];
    renderKitten(currentKitten);
  }
}

renderAllKittens();