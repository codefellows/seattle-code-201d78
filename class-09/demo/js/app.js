// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


const formElem = document.getElementById('addKittenForm')
// create a kitten factory aka constructor function
function Kitten(name, photo, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.photo = photo;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
}

// global function that gives us a random age 
function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add a get age prototype method
Kitten.prototype.getAge = function() {
  this.age = randomAge(3, 12) + ' months'
}

Kitten.prototype.meow = function() {
  console.log('Meow!');
}

const kittenDivElem = document.getElementById('kittenProfiles');
Kitten.prototype.render = function() {
//   <!-- <article>
  const kittenArticleElem = document.createElement('article');
  kittenDivElem.appendChild(kittenArticleElem);
  //   <h2></h2>
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  kittenArticleElem.appendChild(h2Elem);
  // <img></img>
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', this.photo);
  kittenArticleElem.appendChild(imgElem);
//   <p></p>
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${this.age}`
  kittenArticleElem.appendChild(pElem)
  const pElem2 = document.createElement('p');
  pElem2.textContent = `interests:`
  kittenArticleElem.appendChild(pElem2)
//   <ul>
  const ulElem = document.createElement('ul');
  kittenArticleElem.appendChild(ulElem)
//     <li></li>
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  const tableElem = document.createElement('table');
  kittenArticleElem.appendChild(tableElem);
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);
  const thElem1 = document.createElement('th');
  thElem1.textContent = 'KIDS';
  trElem.appendChild(thElem1);
  const thElem2 = document.createElement('th');
  thElem2.textContent = 'DOGS';
  trElem.appendChild(thElem2);
  const thElem3 = document.createElement('th');
  thElem3.textContent = 'CATS';
  trElem.appendChild(thElem3);

  // new row for object values
  const trElem2 = document.createElement('tr');
  tableElem.appendChild(trElem2);
  // add td for each value
  const tdElem1 = document.createElement('td');
  tdElem1.textContent = this.isGoodWithKids;
  trElem2.appendChild(tdElem1);

  const tdElem2 = document.createElement('td');
  tdElem2.textContent = this.isGoodWithDogs;
  trElem2.appendChild(tdElem2);

  const tdElem3 = document.createElement('td');
  tdElem3.textContent = this.isGoodWithCats;
  trElem2.appendChild(tdElem3);

}

function handleSubmit(event){
  // forms have a wierd default behavior where they wipe out all the data
  event.preventDefault()
  console.log(event);
  console.log(event.target.name.value)
  const name = event.target.name.value;
  const photo = event.target.photo.value;
  // event is a snapshot of what was occuring on the element we are listening to when we heard the event
  // target is the thing we are listening to 'form'
  const interests = event.target.interests.value;
  const interestsArray = interests.split(', ');
  // split takes a string and spilts it into an array by whatever pattern you put in the parameter
  // our datatype - expected to be bool
  const isGoodWithCats = event.target.isGoodWithCats.checked;
  const isGoodWithDogs = event.target.isGoodWithDogs.checked;
  const isGoodWithKids = event.target.isGoodWithKids.checked;
  // Kitten(name, photo, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats)

  let usersKitten = new Kitten(name, photo,interestsArray, isGoodWithKids, isGoodWithDogs, isGoodWithCats);
  console.log(usersKitten);
  usersKitten.getAge();
  usersKitten.render();
  event.target.reset();

}


let frankie = new Kitten('Frankie', './images/frankie.jpeg', ['lazers', 'mice', 'string'], true, false, true);


const jumper = new Kitten('jumper', './images/jumper.jpeg', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true);

const serena = new Kitten('serena', './images/serena.jpeg', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true);





frankie.getAge();
jumper.getAge();
serena.getAge();
frankie.render();
jumper.render();
serena.render();


// get a reference for the element we want to listen to - make a variable
// add a listener to the varable representing the element
formElem.addEventListener('submit', handleSubmit);
// specify the event we are listening for
// callback function to handle the event


// JS begins to listen for a submit event
// when an event occurs the handleSubmit function is called and an argument is passed into the function
// the argument is an object representing the event
