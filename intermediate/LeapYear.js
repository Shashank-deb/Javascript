//First Function of Leap Year
function isLeap(year)
{
    if((year%4==0) && !(year%100==0) && (year%400))
    {
        console.log("Year is Leap Year!");
    }
    else
    {
        console.log("Year is Not Leap Year!");
    }
}


// Second Function of Leap Year
function  leapYear(year){
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        {
            return "Leap Year";
        }
        else{
            return "Not Leap Year";
        }
    }
    else{
        return "Leap Year";
    }
}
return "Leap Year";
}
var ans=isLeap(2016);
console.log(ans);
