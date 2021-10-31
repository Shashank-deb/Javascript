function getMilk(money)
{
    console.log("Buy : "+calculateBottle(money,3)+" bottles of milk ");
    return calcChange(money,3);
   
}
function calculateBottle(startingMoney,costPerBottle)
{
    var noOfBottles=Math.floor(startingMoney/costPerBottle);//throws the quotient
    return noOfBottles;

}
function calcChange(startingAmount,costPerBottle)
{
    return startingAmount%costPerBottle;//throws the remainder

}
console.log(calculateBottle(10,3));
console.log("We get total Milk: "+getMilk(10)+"  liters out of total Number of bottles is : "+calculateBottle(10,3));
                                   //10%3=1                                                  10/3=3(by floor)