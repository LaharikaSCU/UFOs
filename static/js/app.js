// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html(""); //telling the function to use empty canvas everytime // First, clear out any existing data
                  // Next, loop through each object in the data and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};


// 3. Use this function to update the filters. 
function updateFilters() {
  console.log("Entering function updateFilters")

// 4a. Save the element that was changed as a variable.
let ChangedElement = d3.select(this);

// 4b. Save the value that was changed as a variable.
let elementValue = ChangedElement.property("value");
console.log("changed property value is: ", elementValue);
   
// 4c. Save the id of the filter that was changed as a variable.
let filterID = ChangedElement.attr("id");
console.log("change property id: ", filterID);
  
// 5. If a filter value was entered then add that filterId and value
// to the filters list. Otherwise, clear that filter from the filters object.
 
  if(elementValue){
      filters[filterID] = elementValue;     
  }
  else{
      delete filters[filterID];
  };
  console.log("filters object:", filters);

// 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  console.log(" Entering function filterTable");
// 8. Set the filtered data to the tableData.
let filterData = tableData;

// 9. Loop through all of the filters and keep any data that
// matches the filter values
Object.entries(filters).forEach(function(filterRow){
      console.log("filterRow is: ", filterRow);
      if (filters){
       
        filterData = filterData.filter(row => row[filterRow[0]] === filterRow[1]);
        console.log("filteredData is: ", filterData)
      };
    });
  
// 10. Finally, rebuild the table using the filtered data
buildTable(filterData);
}
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
  
// Build the table when the page loads
buildTable(tableData);
