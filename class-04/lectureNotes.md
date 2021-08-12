# Lecture Notes

## Layouts
- positioning and floats
- flexbox (week 2)
- grid (week 3)

## display
- all html elements have inherent display values... but we get this nice CSS property called display that allows us to alter how it is viewed

## display: inline
- for example **bold** is inline with the other text
- puts an element 'inline' with the other elements around it. Any height and width properties will have no effect.

## display: inline-block
- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

- Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

- Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

## display: block
- Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width of it's containing element.


## Positioning
2 types
- static-type
- relative-type
  - relative
  - absolute
  - fixed

### Static is standard - where it normally sits

### Position Relative
Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute
Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed
fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.

https://codepen.io/sarabeth-russert/pen/mdRBvbG


## Functions 
- a new data type

### What
- A function is a group of statements that perform a task (or calculate a value) stored within a a structure that prevents them from running until the function is ‘called’ or ‘invoked’ 

### why
- functions are reusable
- functions make code dry
- prevent bugs

pour ingredients into a bowl 

mix ingredients for 3 miniutes

pour the batter into a pan

bake for 40 min at 350


``` javascript
  function bakeACake() {
    pour ingredients into a bowl 
    mix ingredients for 3 miniutes
    pour the batter into a pan
    bake for 40 min at 350
  }

```

``` js

bakeACake()
```