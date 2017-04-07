/**
 * Created by rupakulr on 1/3/2017.
 */
function reverseVowels(str) {

    var newStr = str.split('');

    var vowels = ['a','e','i','o','u'];


    var vowelsToReplace = [];

    for(var i=0;i<newStr.length;i++){
        if(vowels.indexOf(newStr[i]) > -1){
            vowelsToReplace.push(newStr[i]);
        }
    }

    for(var i=0;i<newStr.length;i++){
        if(vowels.indexOf(newStr[i]) > -1){
           newStr[i] = vowelsToReplace.pop();
        }
    }

    return newStr.join("");

}

reverseVowels("phanio");