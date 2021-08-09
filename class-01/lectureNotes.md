# Lecture Notes

## Inline Style and Script
- the old way of inserting styling and script directly into our HTML
- we now sepperate this code "sepperation of concerns" 
  - to make code bases more organized and easier to read
  - easier to debug
  - easier for teams to all work on one application at once
- to add code for script and styling inline
  - for styling add a `style` attribute directly to an element:
  - `<h1 style="color: green">Welcome to Class</h1>`
  - to add script insert it in between opening and closing `script` tags
  - `<script> console.log('Hey class!!!'); </script>`

## internal styles
- these are styles added tot he head of your html document within a style element
- set rules for the entire document
-  `<style> body {background-color: darkgoldenrod;} li {color: red;}</style>`
