// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(ufoData) {

// the table 
	tbody.html("");
	ufoData.forEach((dataRow) => {
		var row = tbody.append("tr");
		Object.entries(dataRow).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
}
// City search -----------------------------------------

buildTable(tableData);
d3.select("#filter-btn").on("click", handleClick);

function cityClick() {
	d3.event.preventDefault();
	var city = d3.select("#city").property("value");
	var filterData = tableData;
	
	if (city) {
		filterData = filterData.filter(dataRow => dataRow.city === city) 
	}

	buildTable(filterData);	
}
	

// Date search --------------------------------------
buildTable(tableData);
// 
// d3.select("#filter-btn").on("click", handleClick);

function handleClick() {
	d3.event.preventDefault();
	var date = d3.select("#datetime").property("value");
	var city = d3.select("#city").property("value");
	var state = d3.select("#state").property("value");
	var country = d3.select("#country").property("value");
	var shape = d3.select("#shape").property("value");


	var filterData = tableData;
	
	if (date) {
		filterData = filterData.filter(dataRow => dataRow.datetime === date) 
	}
	if (city){
		filterData = filterData.filter(dataRow => dataRow.city === city) 
	}
	if (state){
		filterData = filterData.filter(dataRow => dataRow.state === state)
	}
	if (country){
		filterData = filterData.filter(dataRow => dataRow.country === country)  
	}
	if (shape){
		filterData = filterData.filter(dataRow => dataRow.shape === shape) 
	}
	buildTable(filterData);	
}


	
	
	
	
	
	
	
	
	
	
	
	
	