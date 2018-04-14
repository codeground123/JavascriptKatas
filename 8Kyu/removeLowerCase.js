function removeLowerCase(str){



var vowels = "aeiou";
var output = "";
for(var i=0;i<str.length;i++){
    if( !(vowels.indexOf(str[i]) > -1 )){
        output+=str[i];
    }
}
return output;

}

var str = removeLowerCase("phani kumar");
console.log(str);