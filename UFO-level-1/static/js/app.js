// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function (UFOdata) {
  console.log(UFOdata);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function (UFOdata) {
  console.log(UFOdata);
  var row = tbody.append("tr");


// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function (UFOdata) {
//   console.log(UFOdata);
//   var row = tbody.append("tr");

  Object.entries(UFOdata).forEach(function ([key, value]) {
    console.log(key, value);
  });

});


// // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function (UFOdata) {
  console.log(UFOdata);
  var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
    console.log(row);
  });
});

// BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
var UFO = data;

//Select the button
var d = d3.select("#filter-btn");

d.on("click", function () {
  window.event.preventDefault();
  
  var inputElement = d3.select("#datetime");


  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(UFO);


  var filteredData = UFO.filter(UFO => UFO.datetime===inputValue)
  var Table = document.getElementById("ufo-table");
  
  // data.forEach(function (filteredData) {
    //   console.log(filteredData);
    //   var row = tbody.append("tr");
    console.log(filteredData);
    var tbody=d3.select("tbody");
    tbody.html('');
  filteredData.forEach(function (item) {
      var row = tbody.append("tr");
      console.log(item);
      console.log(row);
      Object.entries(item).forEach(function ([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
     
      console.log(tbody);
     
 
 

})})});
  // })})


  
 
  

// value=filteredData
// var flist=[]
// for (var i=0; i<UFO.length; i++){
//   value=filteredData
//   var name=UFO[i].datetime

//   if (name.includes(value)){
//     flist.push(UFO[i])
  
// }}



// flist.forEach(function(Fdata) {
//   console.log(Fdata);
//   var row = tbody.append("tr");
//   Object.entries(Fdata).forEach(function ([key, value]) {
//     console.log(key, value);
    // Append a cell to the row for each value
    
//     var cell = row.append("td");
//     cell.text(value);
//     console.log(Fdata);
    
  
  



// var button = d3.select("#filter-btn");

// button.on("click", function (Fdata) {
//   window.event.preventDefault();
  //Select the input element and get the raw HTML node
  // var inputElement = d3.select("#datetime");

  //Get the value property of the input element
  // var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(Fdata);
//   
