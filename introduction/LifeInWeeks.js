function lifeInWeeks(age)
{
    var yearRemaining=90-age;
    var days=yearRemaining*365;
    var weeks=yearRemaining*52;
    var months=yearRemaining*12;
    console.log("You have : "+days+" days "+weeks+" weeks and "+months+" months remaining!");
}
lifeInWeeks(21);