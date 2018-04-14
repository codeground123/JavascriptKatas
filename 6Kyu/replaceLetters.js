//https://www.codewars.com/kata/replace-letters
function getNearVowel(input){
  var output = "";
  
  if(input>='a'&&input<='z'){
    //if(input<='c ')
      //output='a';
     if(input<='e'){
      output='e';
      }
    else if(input<='h') {
      output='i'; }
    else if(input<='n') { 
      output='o'; 
    } else if(input<='t') { 
      output='u'; 
    }
    else  { 
      output='a';
    }
}
  return output;
}

function replaceLetters(word) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
var vowels = ['a','e','i','o','u'];

var wordArr = word.split('');
var index = 0;
var res =[];
for(var i=0;i<wordArr.length;i++){
        if(wordArr[i] === 'a'){
            res.push('z');
        } else if(vowels.indexOf(wordArr[i]) > -1){
            var alpIndex = alphabet.indexOf(wordArr[i]);
            var word = alphabet[alpIndex-1];
            res.push(word);
        } else if(wordArr[i] === 'z') {
            res.push('a');
        } else {
            var nearVowel = getNearVowel(wordArr[i]);
            res.push(nearVowel);
        }
}
return res.join('');
}

var res = replaceLetters("abcdtuvwxyz");
console.log(res);

