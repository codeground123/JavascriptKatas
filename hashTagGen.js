function generateHashTag(str) {

    var strArr = capFirstLetter(str);

    if (!str) {
        return false;
    }

    var res = "#"+strArr.join('');

    if(res.length > 140){
        return false;
    }

    return res;

}

function capFirstLetter(str) {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substr((1));
    }
    return strArr;
}

var res = generateHashTag("Hello world");
console.log(res);