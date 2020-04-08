// select tbody
var tbody = d3.select("tbody");

// console.log(data);
// We need to loop through data

// for  (var i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// scope is used for table, class is used for other elements
//for each "item" in data

    data.forEach(function (item) {
    // do something
    // console.log(item);
    // append new row to tbody
    var row = tbody.append("tr");
    // row.append("th").attr("scope", "row").text()(item.id)
    // row.append("td").text()(item.name)
    // row.append("td").text()(item.side)
    // row.append("td").text()(item.power)

    //goes through each dictionary and grabs one key and avalue and prints it out
    // drop it in square values for list/prettier form

    Object.entries(item).forEach(function ([key, value]) {
       // console.log([key,value]);
        var td = row.append("td");
        td.text(value);
        
    });
});

// a higher order is a prenames function that takes another function

// an arguement
// .forEach(function(){})
// .map(function(){}
// .filter(function(){})
// .reduce(function(){})
var names = data.map(function (item) {return item.name});
console.log(names);
var yoda = data.filter(funtion (item) { return item.side === 'Sith'
console.log(yoda);


// FORM JS

var button = document.querySlectior("button");
button.addEventListener("click", function (event) {
    clickFunc);
fuction clickFunc() {
    console.log("clicked")
}
var tabledata = data;

function table(){
 
var tbody = d3.select("tbody");
tabledata.forEach(function (item) {
    var row = tbody.append("tr");
    Object.entries(item).forEach(function ([key, value]) {
        var td = row.append("td");
        td.text(value);
});
});
}

table(tabledata)

function handleclick(){
   //use this line for the homework / below is how to get value from input box
var date = d3.select("#datetime").property("value")
var filteredData = data.filter(inputvalue => inputvalue.datetime === date) 
table(filteredData)
}
d3.selectALL("#filter-btn").on("click", handleclick)
// homework concepts
// select must give an option for each value that is in the data. then when it grabs the desired data, which may be an ID, I want it to select ID and have ID do some type of event listner, and that event listener controls what happens on the page.
// empty array and push new