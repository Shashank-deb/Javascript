// var name="shashank";
// name.toUpperCase();
// name.toLowerCase();
var name = prompt("Enter the Name: ");
var firstName = name.slice(0, 1).toUpperCase();
var restName = name.slice(1, name.length);
restName = restName.toLowerCase();
var result = firstName + restName;
alert("Hello " + result);
