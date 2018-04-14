function greatInArray(arr){

var myArr = arr;
var max =0;
var res = [];
for(var i=0;i<1;i++){
for(var i=0;i<myArr.length;i++){
    if(myArr[i] > max){
        max = myArr[i];
    }

}
res.push(max);
myArr.splice(myArr.indexOf(max),1);
//console.log(myArr);
}

return res;
}
var res = greatInArray([12,1,4]);
console.log(res);