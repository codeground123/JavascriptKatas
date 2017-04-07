/**
 * Created by rupakulr on 10/12/2016.
 */
function disemvowel(str) {
   var vowels = ["a", "e", "i", "o", "u"];
   var words = str;

    var arr = [];
    var res = ""
    for(var i=0; i<words.length;i++){
        if(vowels.indexOf(words[i].toLowerCase()) < 0){
            res+=words[i];
        }
    }
return res;
}
var res = disemvowel("This website is for losers LOL!");
console.log(res);
