# Lecture Notes

## const
### what?
- a way to declare a constant variable - a variable you don't ever plan on changing the value of

`const bestDog = 'indiana'`

`bestDog = 'mj'` - you can't reassign a constant variable CAN NOT DO

`let coolDog = 'mj'`

`coolDog = 'indiana'` - with let we can reassign a variable to a new value

`const myArray = []` - I can add to the inside of this array and that is allowed

`myArray.push('fruit loops');` CAN DO

`myArray = 'pizza'` NOT ALLOWED

### why??
- because it never can never be changed this prevents errors and tells a better story with our code


## Objects
### what?
- JavaScript objects are convenient & powerful ways to group data and functions. 
- store data of varying types to describe something
- They store data as properties, which are represented as key: value pairs, and can have methods, which are functions associated with the object.

- Similar to arrays, but with semantic or explicit element names

``` javaScript
const myArray = ['a', 'b', 'c'];

const myObject = {
	0: 'a',
	1: 'b',
	2: 'c'
};

const personArray = ['Sam', 30, false, walk];

const person = {
  name: 'Sam',
  age: 30,
  isWalking: false,
  walk: function() {
    console.log(this.name + 'is now walking');
    this.isWalking: true;
  }
}
```


### Built-in Objects
- String, Array, Document, Math

### Prototypes
- Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
- All objects have the props & methods of their prototype
- If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it

## Adding Something to the DOM

### The DOM
"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object.

Here is a quick exercise to prove this point:

type document in the console within your browser
find document.body
actually type in document.body
change the document.body.textContext = 'to something else'
look at all the options on the document. dot notation.
Within the document object, we have a method in there called getElementById. This allows us to "get a specific element within the HTML by specifying the id"

We can only add ONE THING AT A TIME.

As an example, let's add a <p> to an existing <div>

This is our existing HTML:

<div id="parentElement">
</div>