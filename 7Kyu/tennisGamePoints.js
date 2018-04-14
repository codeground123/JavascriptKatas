function tennisGamePoints(score) {

var scoreArr = score.split('-');

var firstPlayerScore = scoreArr[0];
var secPlayerScore = scoreArr[1];

var pointsTable = {
    "love": 0,
    "15" :1,
    "30":2,
    "40":3  
}

if(secPlayerScore === "all"){
    return pointsTable[firstPlayerScore] + pointsTable[firstPlayerScore];
}
return pointsTable[firstPlayerScore] + pointsTable[secPlayerScore]; 
  
}
var res = tennisGamePoints("love-15");
console.log(res);