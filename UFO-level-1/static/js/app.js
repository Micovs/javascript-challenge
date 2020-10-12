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

// Select the form
var form = d3.select(".form-control"); 

// Create event handlers
// **********
// First event when the button "Filter table" is pressed 
button.on("click", runEnter);

// Second event when space or Enter is pressed
form.on("keypress", function() {
    if(d3.event.keyCode === 32 || d3.event.keyCode === 13){
    runEnter();
    };
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue)
  
    // Sets the value that was inputed by the user as a placeholder
    inputElement.attr("placeholder", inputValue)


    // Filters the data based on the user input
    var filteredData = tableData.filter(report => report.datetime === inputValue);
    console.log(filteredData)

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