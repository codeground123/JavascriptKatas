function addLength(str){

    var strArr = str.split(' ');
    var res =[];
    for(var i=0;i<strArr.length;i++){
        var temp = strArr[i]+ " " + strArr[i].length;
        res.push(temp);
    }
    return res;
}

var res = addLength("apple ban");
console.log(res);


