'use strict';

console.log('hey!');

// we need to set up constructor function for products
  // img name - add timesShown timesClicked

// pm's are something that any instance of a constructor can use and basicly apply to a SINGLE INSTANCE of the object 

// prototype method
  // rendering a single product

// functions
  // chooses 3 random product instances
  // rendering 3 products to the page
    // take the random products and call the single render protoype method on them 
  // render results
  
// listener for the container that holds the images

/// add button if we have time


// --------------------------- Global Variables ----------------------------- //

const leftImageElem = document.getElementById('leftImg');
const centerImageElem = document.getElementById('centerImg');
const rightImageElem = document.getElementById('rightImg');
const productSectionElem = document.getElementById('products');


// when I refactor this consider attaching to the Product constructor
let leftProduct = null;
let rightProduct = null;
let centerProduct = null;

let rounds = 10;

// --------------------------- Constructor Functions ---------------------------- //

function Product(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.timesClicked = 0;
}

// --------------------------- Prototype Method ----------------------------- //
Product.allProducts = [];
// make a method that renders a product to the page (param: imageElem)
Product.prototype.renderSingleProduct = function(imageElem) {
  imageElem.src = this.image;
  // imageElem.setAttribute('src', this.image);
  this.timesShown++;
}

// --------------------------- Functions -------------------------- //
function makeAProduct(name, image) {
  Product.allProducts.push(new Product(name, image));
}

function chooseThreeProducts() {
  /// when we refactor consider putting the random equation in a function
  const leftIndex = Math.floor(Math.random() * Product.allProducts.length);
  leftProduct = Product.allProducts[leftIndex];

  while (!rightProduct || rightProduct === leftProduct) {
    const rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    rightProduct = Product.allProducts[rightIndex];
  }

  while (!centerProduct || centerProduct === leftProduct || centerProduct === rightProduct) {
    const centerIndex = Math.floor(Math.random() * Product.allProducts.length);
    centerProduct = Product.allProducts[centerIndex];
  }

  // render them here?
  // consider a seperate function for this behavior
  leftProduct.renderSingleProduct(leftImageElem);
  rightProduct.renderSingleProduct(rightImageElem);
  centerProduct.renderSingleProduct(centerImageElem);

}

function renderResults() {
  const resultsElem = document.getElementById('results');
  resultsElem.innerHTML = '';
  for (let product of Product.allProducts) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name} was shown ${product.timesShown} times and was clicked ${product.timesClicked} times.`;
    resultsElem.appendChild(liElem);
  }

  // for (let i = 0; i < Product.allProducts.length; i++) {
  //   let product = Product.allProducts[i];
  //   const liElem = document.createElement('li');
  //   liElem.textContent = `${product.name} was shown ${product.timesShown} times and was clicked ${product.timesClicked} times.`;
  //   resultsElem.appendChild(liElem);
  // }
}

function handleClick(event) {
  console.log(event.target);
  const validTargets = [leftImageElem, rightImageElem, centerImageElem];
  // .includes does a for loop and checks for truthiness
  if (validTargets.includes(event.target)) {
    rounds--;
    if (event.target === validTargets[0]) {
      validTargets[0].timesClicked++;
    } else if (event.target === validTargets[1]) {
      validTargets[1].timesClicked++;
    } else {
      validTargets[2].timesClicked++;
    }
    if (rounds === 0) {
      //if they are out of rounds render the results and turn off the listener
      productSectionElem.removeEventListener('click', handleClick);
      // render results
      alert('we are out of votes');
      renderResults();
    } else {
      chooseThreeProducts();
    }
  }
  // count down rounds if they clicked on a valid target
  // update votes on the correct target
  // if they are out of rounds render the results and turn off the listener
  // else get three new things to vote on
}

// --------------------------- Listeners -------------------------- //

productSectionElem.addEventListener('click', handleClick);


// --------------------------- Call Functions Here ---------------------- // 
makeAProduct('R2-D2 Suitcase', './img/bag.jpg');
makeAProduct('Banana Slicer', './img/banana.jpg');
makeAProduct('TP Media Stand', './img/bathroom.jpg');
makeAProduct('Open-toed Boots', './img/boots.jpg');
makeAProduct('Breakfast Station', './img/breakfast.jpg');
makeAProduct('Meatball Bubblegum', './img/bubblegum.jpg');
makeAProduct('Stylish Chair', './img/chair.jpg');
makeAProduct('Cthulhu Figure', './img/cthulhu.jpg');
makeAProduct('Duck-bill Muzzle', './img/dog-duck.jpg');
makeAProduct('Dragon Meat', './img/dragon.jpg');
makeAProduct('Utensil Pen Cap', './img/pen.jpg');
makeAProduct('Pet Dust Boots', './img/pet-sweep.jpg');
makeAProduct('Pizza Shears', './img/scissors.jpg');
makeAProduct('Shark Sleepsack', './img/shark.jpg');
makeAProduct('Infant Sweep Suit', './img/sweep.png');
makeAProduct('Tauntaun Sleepsack', './img/tauntaun.jpg');
makeAProduct('Unicorn Meat', './img/unicorn.jpg');
makeAProduct('Tentacle USB', './img/usb.gif');
makeAProduct('Watering Can', './img/water-can.jpg');
makeAProduct('Wine Glass', './img/wine-glass.jpg');

chooseThreeProducts();