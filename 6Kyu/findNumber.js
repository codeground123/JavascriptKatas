// return the missing number!
function findNumber(array) {
  
var firstNum = array[0];
var lastNum = Math.max.apply(Math,array);

var missingNum;
for(var i=1;i<lastNum;i++){
        if(array.indexOf(i) === -1){
            missingNum = i;
        }
}
return missingNum;
}

var res = findNumber([13,11,10,3,2,1,4,5,6,9,7,8]);
console.log(res);