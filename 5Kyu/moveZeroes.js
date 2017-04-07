var moveZeros = function (arr) {
    // TODO: Program me

    var zeroArr = [];
    var myArr = arr;
    for(var i=0;i<myArr.length;i++){

        if(myArr[i]===0){
            myArr.splice(i,1);
            zeroArr.push(0);
            i-=1;
        }
    }

    return myArr.concat(zeroArr);

}

//
//var moveZeros = function (arr) {
//    var zeroes = [];
//    var withoutZeros = arr.filter(function(value){
//        if(value === 0) {
//            zeroes.push(0);
//            return false;
//        }
//        return true;
//    });
//
//    return withoutZeros.concat(zeroes);
//}

var res = moveZeros([false,1,0,1,2,0,1,3,"a"]);
console.log(res);