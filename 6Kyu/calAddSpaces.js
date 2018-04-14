function calculate(str) {
 
var numArr = str.split("+");

var spaceArr = [];
for(var i=0;i<numArr.length;i++){
    if(numArr[i].indexOf(" ") > -1){
        var num = parseInt(numArr[i].replace(/ /g,''));
        spaceArr.push(num);
        numArr.splice(i,1);
    }
}
var firstArr =  numArr.reduce(function(sum, value) {
  return parseInt(sum) + parseInt(value);
}, 0);

var secArr =  spaceArr.reduce(function(sum, value) {
  return parseInt(sum + value);
}, 0);
return firstArr+secArr;
}

var res = calculate("1+2+3");
console.log(res);