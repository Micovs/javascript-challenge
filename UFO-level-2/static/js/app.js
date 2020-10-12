// from data.js
var tableData = data;


// Creating the table
// ******************
// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

 // Select the button
var button = d3.select("#filter-btn");

// Select the form --- changed from part one, explanation on line 32
var form = d3.select("#shape"); 

// Create event handlers
// **********
// First event when the button "Filter table" is pressed 
button.on("click", runEnter);

// Second event when space or Enter is pressed
// ******************************
// For this part the event handler is set up for the last cell, which is the shape.
// The idea is to activate the search only after the user is finished entering the last field, which is the shape.
form.on("keypress", function() {
    if(d3.event.keyCode === 32 || d3.event.keyCode === 13){
    runEnter();
    };
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input elements and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");


    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    
    // Sets the value that was inputed by the user as a placeholder
    inputElement.attr("placeholder", inputValue);
    inputElementCity.attr("placeholder", inputValueCity);
    inputElementState.attr("placeholder", inputValueState);
    inputElementCountry.attr("placeholder", inputValueCountry);
    inputElementShape.attr("placeholder", inputValueShape);


    // Filters the data based on the user input
    var filteredData = tableData.filter(report => (report.datetime === inputValue && report.city === inputValueCity &&
      report.state === inputValueState && report.country === inputValueCountry && report.shape === inputValueShape));

    // Clean the tbody so the new filtered data can be shown
    tbody.html("");

    // Create the table with the new filtered data
    filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}    