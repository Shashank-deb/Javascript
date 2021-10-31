function getBmiCalculator(weight,height)
{
    var bmi=weight/(height*height);
    return Math.round(bmi);
}
var ans=getBmiCalculator(65,1.8);
console.log(ans);