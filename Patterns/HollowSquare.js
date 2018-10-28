// https://codeforwin.org/2015/07/c-program-to-print-hollow-square-star-pattern.html



function HollowSquare(n){


    var str="";
    for(var i=1;i<=n;i++) {
        if(i === 1 || i === n){
            for(var j=0;j<n;j++){
                str+= "*";
            }
            str+="\n";
         } else {
             str+="*";
            for(var k=0;k<n-2;k++){
                str+= " ";
            }
            str+="*\n";
         }

var res ="test";
    }
 return str;
}

var res = HollowSquare(5);
console.log(res);