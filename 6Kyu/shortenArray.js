function shortenArray(){

var alphabets = "abcdefghijklmnopqrstuvwxyz";

var alphabetArr =  alphabets.split('');

var res = [];
for(var i=0; i< alphabetArr.length; i++){
    if(i===1 || i%2===1){
       var str = alphabetArr[i]+alphabetArr[i].toUpperCase();
       res.push(str);
    } else {
        res.push(alphabetArr[i]);
    }
}

return res;
}

var res = shortenArray();
console.log(res);