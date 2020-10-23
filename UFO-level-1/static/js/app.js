// Get a reference to the table body
// Selecting tbody from index.html

var tbody = d3.select("tbody");

// Console.log the weather data from data.js

console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object

data.forEach(function (UFOdata) {
  // console.log(UFOdata);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object

data.forEach(function (UFOdata) {
  // console.log(UFOdata);
  var row = tbody.append("tr");


 // Step 3:  Use `Object.entries` to console.log each weather report value

Object.entries(UFOdata).forEach(function ([key, value]) {
    // console.log(key, value);
  });

});


// // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)

data.forEach(function (UFOdata) {

  // append one table row for each weather report object

  var row = tbody.append("tr");

  Object.entries(UFOdata).forEach(function ([key, value]) {

    // Append a cell to the row for each value
    // in the weather report object

    var cell = row.append("td");
    cell.text(value);

  });
});


var UFO = data;

//Select the button using its id

var d = d3.select("#filter-btn");

d.on("click", function () {
  window.event.preventDefault();
  
  // select the datetime id which is our filter

  var inputElement = d3.select("#datetime");

// selects the value associated with the datetime

  var inputValue = inputElement.property("value");

  // creates our filter

  var filteredData = UFO.filter(UFO => UFO.datetime===inputValue)

  // selects our ufo table

  var Table = document.getElementById("ufo-table");
  
  // recreates the table for each filter applied

    var tbody=d3.select("tbody");
    tbody.html('');
  filteredData.forEach(function (item) {

  // appends a tr element for each weather report object

      var row = tbody.append("tr");

 // appends a td element for each cell value 
      Object.entries(item).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      console.log(tbody);
     
 
 

})})});
 