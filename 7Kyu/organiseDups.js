function group(arr) {

    var res = [];
    var done = {};
    for (var i = 0; i < arr.length; i++) {
        var temp = [];

        if (!done[arr[i]]) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    temp.push(arr[i]);
                }
            }
            res.push(temp);
        }
        done[arr[i]] = true;


    }
    return res;
}

var res = group([3, 2, 6, 2, 1, 3]);
console.log(res);