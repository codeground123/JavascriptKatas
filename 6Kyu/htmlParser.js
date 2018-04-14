function htmlParser(htmlStr, ele){

var el = document.createElement('p');
el.innerHTML = htmlStr;

var res = document.querySelector('h2').innerHTML;

return res;
    
}

var str= "<h1>This is h1</h1> <h2> This is h2 </h2>"
var res = htmlParser(str,'h2');
console.log(res);