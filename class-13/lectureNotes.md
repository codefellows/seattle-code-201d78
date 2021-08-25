# lecture notes

## Data Persistance
- Database... relational database (sql) or non-relational (mongodb)
- Local Storage 
  - it is an object that is stored in your (browsers) application files on your computer
  - local storage is specific to one computer

## Why
- So that a user is able to retain data across page refreshes and on different parts of the application


## Local Storage
### How data is stored
- you can set string data into storage as a key: value pair
- to stringify objects and arrays use `JSON.stringify()`

### Methods on Local Storage
- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`

### steps
- to put something in storage
  - `let stringifiedStuff = JSON.stringify('myStuffArray');`
  - when we stringify it strips the constructor away from the object
  - `localStorage.setItem('myStuff', stringifiedStuff)`
- to get it out
  - `let stuffImGettingOut = localStorage.getItem('myStuff');`
  - `let parsedStuff = JSON.parse(stuffImGettingOut);`
  - what I parse is an array of plain objects - not instances