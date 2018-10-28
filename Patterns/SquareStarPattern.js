//  https://codeforwin.org/2015/07/square-star-pattern-in-c.html



function squareStarPattern(n){

    var str = "";
    for(var i = 0 ;i< n;i++){
        for(var j=0;j<n;j++){
            str+= "*";
        }
        str+="\n";
    }
    
    return str;

}

var res = squareStarPattern(5);
console.log(res);