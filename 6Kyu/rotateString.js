function rotate(str) {

    var strArr = str.split('');
    var res = [];
    for (var i = 1; i <= str.length; i++) {
        var firstPart = str.substring(0, i);
        var tempStr = str.substring(i) + firstPart;
        res.push(tempStr);
    }
    return res;
}

var res = rotate("hello");

console.log(res);
