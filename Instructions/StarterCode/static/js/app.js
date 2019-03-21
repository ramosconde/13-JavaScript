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


// Date search --------------------------------------
buildTable(tableData);

d3.select("#filter-btn").on("click", handleClick);

function handleClick() {
	d3.event.preventDefault();
	var date = d3.select("#datetime").property("value");
	var filterData = tableData;
	
	if (date) {
		filterData = filterData.filter(dataRow => dataRow.datetime === date) 
	}

	buildTable(filterData);	
}

// City search -----------------------------------------

// buildTable(tableData);
d3.select("#filter-btn").on("click", cityClick);

function cityClick() {
	d3.event.preventDefault();
	var city = d3.select("#city").property("value");
	var filterData = tableData;
	
	if (city) {
		filterData = filterData.filter(dataRow => dataRow.city === city) 
	}

// 	buildTable(filterData);	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	