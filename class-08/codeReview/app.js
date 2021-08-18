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
const locationsTable = document.getElementById('locations');

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// hours of operation array - global?

function Location(name, minCust, maxCust, avgSalePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalePerCust = avgSalePerCust;
  this.hourlySalesArray = [];

  // adds the new location we just constructed to the Location.allLocations array
  Location.allLocations.push(this);
  // allLocations.push(this);
}
// const allLocations = [];
Location.allLocations = [];

Location.prototype.randomNumberOfCustomers = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Location.prototype.fillHourlySalesArray = function() {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
    this.hourlySalesArray.push(Math.ceil(salesPerHour));
  }
}

const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location('Tokyo', 3, 24, 1.2);


// adds data to each stores hourlySalesArray
function fillHourlySalesArrayAllLocations() {
  for (let i = 0; i < Location.allLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
    currentLocation.fillHourlySalesArray();
  }
}

fillHourlySalesArrayAllLocations();

// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSalePerCust: 6.3,
//   hourlySalesArray: [],
//   // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSalePerCust: 1.2,
//   hourlySalesArray: [],
//   // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSalePerCust: 3.7,
//   hourlySalesArray: [],
//   // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSalePerCust: 2.3,
//   hourlySalesArray: [],
//   // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSalePerCust: 4.6,
//   hourlySalesArray: [],
//   // the hourly Sales array gets filled with a total for each hour the store is open that is found by multiplying a random number of cust times the avg sales per cust
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }


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
  //<body> <- parent
  //  <main></main> <- child
  //</body>
  // if text content then we add text content
  if (text) {
    element.textContent = text;
  }
  //  <main> Our text content would go here </main>
  return element;
  // a reference to the main element we just created
}

// when we make the header all cells should be th/bold

// thead = the header box/section
// tbody = the body box
// tfoot = footer box
// tr = row, all boxes have to have rows
// td = non bold data cell
// th = our bold data cell

// parameter of location
// make all the elements
// add the location name to the h3
// make a ul
// fill the ul with li by looping through hourly sales array and adding text content '6am: 49 cookies'

// I am going to have a function that renders the row with data for every store. When this function is called it will create the tbody element and append it to my table
Location.prototype.renderSingleLocation = function(body) {
  let total = 0;
  // this whole thing needs to go inside the tbody DONE
  // we need a new row for every location
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);
  // make a th with the city name
  const thElem = _makeElement('th', rowElem, this.name);
  // all cookies per hour should be tds
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let cookiesThisHour = this.hourlySalesArray[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour);
  }
  _makeElement('td', rowElem, total)

}
// const locationsArray = [seattle, tokyo, dubai, paris, lima];

// loop through all locations and call these functions
function renderAllLocations() {
  let tbodyElem = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < Location.allLocations.length; i++) {
    Location.allLocations[i].renderSingleLocation(tbodyElem);
  }
  // for (let i = 0; i < locationsArray.length; i++) {
  //   const currentLocation = locationsArray[i];
  //   currentLocation.fillHourlySalesArray()
  //   renderLocation(currentLocation);
  // }
}

// I need a function that creates a tfoot and appends it to the table
// make a row
// it should also look at each hour of the day and add up all store location cookie sales for THAT HOUR
// make a new cell that holds that hours hours totals
// grand total for the end of the day 
function makeTheFooter() {
  const tfootElem = _makeElement('tfoot', locationsTable, null);
  const rowElem = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowElem, 'Hourly Total');
  let hourlyTotal = 0;
  let grandTotal = 0;
  // loop through the hours of opperation and target each hour i
    // loop through all of the stores and get the sales at that hour (i)
  for (let i = 0; i < hoursOfOperation.length; i++) {
    for (let j = 0; j < Location.allLocations.length; j++) {
      let currentLocation = Location.allLocations[j];
      hourlyTotal += currentLocation.hourlySalesArray[i]
    }
    // now I am done looking at all the stores
    _makeElement('td', rowElem, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  // this means I looked at every hour of the day!
  _makeElement('td', rowElem, grandTotal);
}

renderAllLocations();
makeTheFooter();
