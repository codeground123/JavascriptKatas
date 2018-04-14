function high(x){

var strArr = x.split(' ');

var res =[];

for(var i=0;i<strArr.length;i++){
    var wordScore = getWordScore(strArr[i]);
    res.push(wordScore);
}
var maxWord =  Math.max.apply(Math,res);

var index = res.indexOf(maxWord);
return strArr[index];

}

function getWordScore(word){
    var alphabets = "abcdefghijklmnopqrstuvwxyz";

    var score = 0;
    for(var i=0;i<word.length;i++){
        var index = alphabets.indexOf(word[i])+1;
        score+=index;
    }
    return score;
}

var res = high('take me to semynak');

console.log(res);