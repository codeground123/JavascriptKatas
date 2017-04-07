function generateHashtag (str) {

    if(str.length === 0){
        return false;
    }

    var strArr = str.split(' ');
    var res = [];
    for(var i=0;i<strArr.length;i++){
        var tempStr = returnHashStr(strArr[i]);
        res.push(tempStr);
    }
    var resStr = "#"+res.join('');

    if(resStr.length > 140){
        return false;
    }
    return resStr;
}

function returnHashStr(str){

    var res = "";
    res = str.capitalize();
    return res;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var res = generateHashtag("Hello there thanks for trying my Kata");
console.log(res);
