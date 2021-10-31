prompt("Enter your name: ");
prompt("Enter their name: ");
var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1;
if(loveScore>70)
{
    alert("Your Love Is High: "+loveScore+"Just like Virushka");
}
else if(loveScore>30 && loveScore<=70)
{
    alert("Your Love Score is decent: "+loveScore+"Just like oil and paper");
}
else{
alert("Your Love Score is : "+loveScore+" %");
}