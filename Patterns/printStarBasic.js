/*

            *
           * *
          * * *
         * * * *
        * * * * *

*/ 

function printStar(n){

    var res ="";
    for(var i=1;i<=n;i++){
        for(var j=0;j<n-i;j++){
            res+= " ";
        }
        for(var k=0;k<i;k++){
            res+="* ";
        }
        // for(var j=0;j<n-i;j++){
        //     res+= " ";
        // }
        res+="\n";
    }
    return res;

}

var res = printStar(5);
console.log(res);