function duplicateEncode(word){
  
    var strArr = word.split('');
    var res =[];
    var dupObj = getDuplicateObject(word);
    for(var i=0;i<strArr.length;i++){
        var charCount = dupObj[strArr[i].toLowerCase()];

        if(charCount === 1){
            res.push("(");
        } else {
            res.push(")");
        }
    }

    return res.join('');
}

function getDuplicateObject(str){

var strArr = str.split('');
var res ={};

for(var i=0;i<strArr.length;i++){
    var letter = strArr[i].toLowerCase();
    if(!res[letter]){
        res[letter] = 1;
    }  else {
        res[letter] = res[letter] +1;
    } 
}
  return res;
}

var res = duplicateEncode("QaavuaaakSaIz");
console.log(res);
