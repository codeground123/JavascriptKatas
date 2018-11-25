

function twoSum(arr, target){


    var sums = [];
    var resObj = {}
    for(var i=0;i<arr.length;i++){
        var sumMinusElem = target - arr[i];

        if(resObj[sumMinusElem.toString()] !== undefined){
            sums.push([arr[i], sumMinusElem]);
        }

        resObj[arr[i].toString()] = arr[i];
    }

    return sums;


}

var res = twoSum([4,3,1,8], 7);
console.log(res);