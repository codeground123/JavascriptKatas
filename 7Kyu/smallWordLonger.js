function smallWordHelper(sentence){

var wordArr = sentence.split(' ');
var resArr = [];
for(var i=0;i<wordArr.length;i++){
    if(wordArr[i].length >= 4){
    var tempWord = checkVowelsAndRemove(wordArr[i]);
    resArr.push(tempWord);
}  else if(wordArr[i].length >=3){
        resArr.push(wordArr[i].toUpperCase())
    } else {
        resArr.push(wordArr[i]);
    }

}
return resArr.join(' ');
}   

function checkVowelsAndRemove(str){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var strArr = str.split('');
    for(var i=0;i<strArr.length;i++){
        if(vowels.indexOf(strArr[i]) > -1){
            strArr.splice(i,1);
            i=-1;
        }
    }
    return strArr.join('');
}

var res = smallWordHelper("I'm just a small word from a small word family");
console.log(res);