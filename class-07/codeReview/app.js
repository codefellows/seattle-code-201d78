'use strict';

console.log('hi!');

// get a variable/reference for the place on the page that I want to add elements to

// build my objects - locations
// locationName
// min cust
// max cust
// salesPerCust
// - a way of getting a random number of customers each hour

// reference to the place on the page I want ot put things
const locationsDiv = document.getElementById('locations');

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// hours of operation array - global?

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSalePerCust: 1.2,
  hourlySalesArray: [],
  // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSalePerCust: 3.7,
  hourlySalesArray: [],
  // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalePerCust: 2.3,
  hourlySalesArray: [],
  // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalePerCust: 4.6,
  hourlySalesArray: [],
  // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}


// get the places on the page
// <!-- <article>
// <h3>Title of Location</h3>
// <ul>
//   <li>6am</li>
// </ul>
// </article> -->
function _makeElement(tag, parent, text) {
  // creates an element matching the tag
  const element = document.createElement(tag);
  // appends it to the parent
  parent.appendChild(element);
  // if text content then we add text content
  if (text) {
    element.textContent = text;
  }
  return element;
}

// parameter of location
// make all the elements
// add the location name to the h3
// make a ul
// fill the ul with li by looping through hourly sales array and adding text content '6am: 49 cookies'
function renderLocation(location) {
  let total = 0;
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const text = `${hoursOfOperation[i]}: ${location.hourlySalesArray[i]} cookies`;
    total += location.hourlySalesArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}

const locationsArray = [seattle, tokyo, dubai, paris, lima];

// loop through all locations and call these functions
function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.fillHourlySalesArray()
    renderLocation(currentLocation);
  }
}

renderAllLocations();
