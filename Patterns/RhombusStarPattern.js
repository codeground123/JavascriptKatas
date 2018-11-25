/*
https://codeforwin.org/2015/07/rhombus-star-pattern-program-in-c.html

    *****
   *****
  *****
 *****
*****

*/

function RhombusStarPattern(N){

    var res ="";

    for(var i=1;i<=N;i++) {

        for(var j=N-i;j>0;j--) {
            res+=" ";
        }

        for(var k=0;k<=N;k++) {
            res+="*";
        }
        res+="\n";
    }

    return res;
}

var res = RhombusStarPattern(5);
console.log(res);
