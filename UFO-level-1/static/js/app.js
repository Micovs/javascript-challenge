// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });