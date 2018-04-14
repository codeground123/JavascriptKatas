//https://www.codewars.com/kata/only-duplicates/train/javascript
function onlyDuplicates(str){

var strArr = str.split('');
var count = 0;

for(var i=0;i<strArr.length;i++){
    for(var j=0;j<strArr.length;j++){
        if(strArr[i] === strArr[j]){
                count+=1;            
        }
    }   
    if(count == 1){
        strArr.splice(i,1);
        i=-1;
    }
    count = 0;
}
return strArr.join('');
}

var res = onlyDuplicates("foundersandcoders");
//abccdefe
console.log(res);