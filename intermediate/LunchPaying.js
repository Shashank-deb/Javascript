function whoPaying(names)
{
    var noOfPeople=names.length;
    var randomPersonPosition=Math.floor(Math.random()*noOfPeople);
    var randomPerson=names[randomPersonPosition];
    console.log("The Lunch Buy by : "+randomPerson+" who is paying the bill of chicken churry!");

}
var names=["Anglina","Somu","Vivek","Amul"];
var ans=whoPaying(names);
console.log(ans);