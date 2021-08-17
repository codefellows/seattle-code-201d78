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

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, color, photo) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.color = color;
  this.photo = photo;

  Kitten.kittenCaboodle.push(this);
}
Kitten.kittenCaboodle = [];
Kitten.prototype.getAge = function() {
  this.age = `${_randomAge(3, 12)} months`;
}

new Kitten('Frankie', ['wet food', 'fish toy', 'cat nip'], true, false, true, 'orange and white', './images/frankie.jpeg');

new Kitten('Jumper', ['dry food', 'crinkle toy', 'treats'], true, false, false, 'cinnamon toast/brindle', './images/jumper.jpeg');

new Kitten('Serena', ['mice', 'lazers', 'scratching'], false, false, true, 'tiger stripe tabby', './images/serena.jpeg');
console.log(Kitten.kittenCaboodle);


// const frankie = {
//   name: 'Frankie',
//   age: null,
//   interests: ['wet food', 'fish toy', 'cat nip'],
//   isGoodWithCats: true,
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   color: 'orange and white',
//   photo: './images/frankie.jpeg',
//   getAge: function() {
//     this.age = `${_randomAge(3, 12)} months`; 
//   }
// }

// const jumper = {
//   name: 'Jumper',
//   age: null,
//   interests: ['dry food', 'crinkle toy', 'treats'],
//   isGoodWithCats: true,
//   isGoodWithKids: false,
//   isGoodWithDogs: false,
//   color: 'cinnamon toast/brindle',
//   photo: './images/jumper.jpeg',
//   getAge: function() {
//     this.age = `${_randomAge(3, 12)} months`; 
//   }
// }

// const serena = {
//   name: 'Serena',
//   age: null,
//   interests: ['mice', 'lazers', 'scratching'],
//   isGoodWithCats: false,
//   isGoodWithKids: false,
//   isGoodWithDogs: true,
//   color: 'tiger stripe tabby',
//   photo: './images/serena.jpeg',
//   getAge: function() {
//     this.age = `${_randomAge(3, 12)} months`; 
//   }
// }


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

// const kittenCaboodle = [frankie, jumper, serena];
// call getAge on all kittens at once
function getAllKittenAges() {
  //loops through the kitten caboodle and calls getAge on all kittens
  for (let i = 0; i < Kitten.kittenCaboodle.length; i++) {
    let currentKitten = Kitten.kittenCaboodle[i];
    currentKitten.getAge();
    console.log(`${currentKitten.name} is ${currentKitten.age} months old`);
  }
}

getAllKittenAges();

console.log(Kitten.kittenCaboodle);

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

Kitten.prototype.renderKitten = function() {
// function renderKitten(kitten) {
  // takes in a kitten and puts it on the page
  // to create elements we use a method : createElement

  // create an article
  const articleElem = document.createElement('article');
  kittenDiv.appendChild(articleElem);
  // create an image
  const imgElem = document.createElement('img');
  imgElem.src = this.photo;
  articleElem.appendChild(imgElem);
  // create an h2  name
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);
  // h3 with color
  // create a p for age
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  // create a ul
  // loop through interests and add li for each interest
  for (let i = 0; i < this.interests.length; i++) {
    let currentInterest = this.interests[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);
  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  const th1Elem = document.createElement('th');
  th1Elem.textContent = 'Cats';
  row1.appendChild(th1Elem);
  const th2Elem = document.createElement('th');
  th2Elem.textContent = 'Dogs';
  row1.appendChild(th2Elem);
  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Kids';
  row1.appendChild(th3Elem);
  const row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  const td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);
  const td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);
  const td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);

}

function renderAllKittens() {
  // loops through kitten array and calls render on each kitten
  for (let i = 0; i < Kitten.kittenCaboodle.length; i++) {
    let currentKitten = Kitten.kittenCaboodle[i];
    currentKitten.renderKitten();
  }
}

renderAllKittens();