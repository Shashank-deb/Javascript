function get99Bottles()
{
    let bottles=99;
    while(bottles > 0)
    {
        console.log(bottles+" bottles of beer in the wall, "+bottles+" bottles of beer");
        bottles--;
        console.log("Take one down and pass it around, "+bottles+" bottles of beer in the wall");
        console.log("  ");
    }
}
get99Bottles();