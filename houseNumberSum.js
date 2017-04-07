function houseNumbersSum(inputArray) {
    //coding and coding..

    var arr = inputArray;
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break;
        }
        res += arr[i];
    }

    return res;
}

var res = houseNumbersSum([0, 1, 2, 3, 4, 5]);
console.log(res);