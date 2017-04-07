function firstReverseTry(arr) {


    var myArr = arr;
    if(myArr.length ==1 || myArr.length == 0){
        return myArr;
    }
    var tempNum = arr[0];

    myArr[0] = myArr[myArr.length - 1];
    myArr[myArr.length - 1] = tempNum;

    return myArr;
}

var res = firstReverseTry([111]);

console.log(res);