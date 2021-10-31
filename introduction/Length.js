var name = "Shashank Sharma";
name.length;
var tweet = prompt("Come with Your tweet: ");
var tweetCount = tweet.length;
alert(
  "Your have written: " +
    tweetCount +
    " and you having remaining : " +
    (140 - tweetCount) +
    " characters!"
    
);

