'use strict';

console.log('coffee is great, but remember to drink water');

// build an application that takes in a users order and renders it to the screen


// get references from html for the form and and order ul
// order object
// render data
// set up event listener and handler
// take in form data
// set up local storage!

// ------------------ global vars ----------------- //

const formElem = document.querySelector('form');

// ------------------ cf ----------------- //

function Order(name, milk, size, drinkType) {
  this.name = name;
  this.milk = milk;
  this.size = size;
  this.drinkType = drinkType;
}

Order.allOrders = [];

// ------------------ pm ----------------- //

// renders an order to the ul for orders
Order.prototype.renderOrder = function() {
  // create an li and print a string that says something like 'Sara ordered a 12oz americano with soy milk'
  const ulOrderElem = document.getElementById('orders');
  const liElem = document.createElement('li');
  liElem.textContent = `${this.name} ordered a ${this.size}oz ${this.drinkType} with ${this.milk} milk.`;
  ulOrderElem.appendChild(liElem);
}

// ------------------ global funct ----------------- //
function getOrdersFromStorage() {
  // do I have any 'orders' in storage? If I don't this method returns null
  const stringifiedOrders = localStorage.getItem('orders');
  if (stringifiedOrders) {
    const parsedOrders = JSON.parse(stringifiedOrders);
    console.log(parsedOrders); // parsedOrders is currently an array of plain objects
    // reinstantiation
    for (let order of parsedOrders) {
      const myOrder = new Order(order.name, order.milk, order.size, order.drinkType);
      Order.allOrders.push(myOrder);
      myOrder.renderOrder();
    }
  } else {
    alert('You have no order history');
  }
  // if so render them to the page
  // if so this probably should be the starting point of my orders array
  // HAVE to be an instance of ORDER to use the renderOrder method
}


function storeOrders() {
  // pack it up! aka stringify
  const stringifiedOrders = JSON.stringify(Order.allOrders);
  console.log(stringifiedOrders);
  // put it into storage with a label
  localStorage.setItem('orders', stringifiedOrders);
}

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const name = event.target.name.value;
  const milk = event.target.milk.value;
  const size = event.target.size.value;
  const drinkType = event.target.drinkType.value;
  // function Order(name, milk, size, drinkType)
  const myOrder = new Order(name, milk, size, drinkType);
  Order.allOrders.push(myOrder);
  console.log(Order.allOrders);
  storeOrders();
  myOrder.renderOrder();
}

// ------------------ listener ----------------- //

formElem.addEventListener('submit', submitHandler);

// ------------------ call any functions ----------------- //

getOrdersFromStorage();