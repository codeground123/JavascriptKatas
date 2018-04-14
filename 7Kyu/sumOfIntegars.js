function sumOfIntegersInString(s){

  
var numberPattern = /\d+/g;
var res = s.match(numberPattern);

if(res === null){
    return 0;
}
return res.reduce(function(a, b) { 
    return parseInt(a) + parseInt(b); 
}, 0);

}

var res = sumOfIntegersInString("Dogs are our best friends.");
//var res = findSmallest([15,8,12])
console.log(res);