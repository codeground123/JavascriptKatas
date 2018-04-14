/*
* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
* The first word within the output should be capitalized only if the original word was capitalized.
* https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
*/


function toCamelCase(str){
    var strArr = str.split(/[_-]+/);

var res = [];
    var firstWord = strArr[0];

    for(var i=1;i<strArr.length;i++){
        var str = strArr[i][0].toUpperCase() + strArr[i].substring(1);
        res.push(str);
    }

    return firstWord+res.join('');
}

var res = toCamelCase("the_stealth_warrior");
console.log(res);