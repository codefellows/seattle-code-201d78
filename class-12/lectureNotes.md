# Lecture Notes

## 3rd party libraries
### What??
- code base someone else wrote that you can use to make your application have more features
- or even platforms to run your code on

## Chart JS
- https://www.chartjs.org/

### what?
- 'Simple yet flexible JavaScript charting for designers & developers'
- a *third party library* we can use to make charts for our app

### why? 
- A cool visual aid to demonstrate data to users
- We don't have to build it from scratch!
- the have good docs!

### how?
- add the library to our script tag in html "https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"
- place a `<canvas>` element into the html code where we want the chart to go
  - sizing the chart can be a pita... because there is built in css in the chart.js code
  - throw your chart in a div or something and size that, by default the chart will take up 100% of it's container
- get the code template from the chart.js docs
- add that code to your JS file and update the data and labels to fit your application
