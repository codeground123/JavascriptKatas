//https://www.codewars.com/kata/is-it-a-vowel-on-this-position

function isItVowel(str, index){
            var strArr = str.split('');
            var letter = strArr[index];
            var vowels = ['a','e','i','o','u'];

            if(vowels.indexOf(letter.toLowerCase()) > -1){
                return true;
            }
            return false;
}

var res = isItVowel("Amanda",0);
console.log(res);