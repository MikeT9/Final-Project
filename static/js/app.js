// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#tbody");

// Console.log the ufo data from data.js
console.log(data);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear rows in tbody by writing empty
    tbody.html("")
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(data => data.datetime === inputValue);;
    
    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        // Use d3 to append one table row `tr` for each object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each value
        Object.entries(ufoSighting).forEach(([key, value]) => {
            // Use d3 to append 1 cell per value
            var cell = row.append("td");
            // Use d3 to update each cell's text with values
            cell.text(value);
        });
    });
};

// Loop Through `data` and console.log each object
data.forEach((ufoSighting) => {
    // Use d3 to append one table row `tr` for each object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each value
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // Use d3 to append 1 cell per value
        var cell = row.append("td");
        // Use d3 to update each cell's text with values
        cell.text(value);
    });
});

