// complete the function
function breakCamelCase(string) {
    
    var index;
for(var i=0;i<string.length;i++){
    if(string[i] === string[i].toUpperCase())
    {
        index = i;
    }
}
return string.substring(0,index) + ' ' + string.substring(index,string.length).toLowerCase();
}


var res = breakCamelCase("camelCasing");
console.log(res);