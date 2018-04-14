function XO(str) {

var xCount = 0;
var ohCount = 0;

var arr = str.split('');

for(var i=0;i<arr.length;i++){
    if(arr[i].toLowerCase() === 'x'){
        xCount+=1;
    } else if (arr[i].toLowerCase() === 'o'){
        ohCount +=1;
    }   
}

if(xCount === 0 && ohCount === 0){
    return true;
}

return xCount === ohCount;

}

var res = XO("xo0");
console.log(res);