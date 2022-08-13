// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a 
// table to your web page and then adds  new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

tableData.forEach(function(ufo_sight) {
    console.log(ufo_sight);
    var row = tbody.append("tr");
    Object.entries(ufo_sight).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Use a date form in your HTML document and write JavaScript code that will listen for events and search
//  through the date/time column to find rows that match user input.




