function remove(s){
    //coding and coding....
var strArr = s.split(' ');

    var res = [];
    var exclmsn = "";
    for(var i=0;i<strArr.length;i++){
       var exc = getExclamation(strArr[i]);
        exclmsn+=exc;
        res.push(strArr[i].replace(/!/g,""));
    }
        return res.join(' ')+exclmsn;
}

function getExclamation(str){
    var s = str.split('');

    var res = [];
    for(var i=0;i<s.length;i++){
        if(s[i] === '!'){
            res.push('!');
        }
    }
    return res.join('');
}

var res = remove("Hi! !Hi Hi!");
console.log(res);