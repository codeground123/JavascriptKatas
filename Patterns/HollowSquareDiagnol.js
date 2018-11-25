
//https://codeforwin.org/2017/09/c-program-print-hollow-square-diagonal-star-pattern.html


/*
*****
** **
* * *
** **
*****
*/

function HollowSquareDiagnol(N){

var res = "";
    for(var i=1;i<=N;i++){
        for(j=1; j<=N; j++)
        {
            /*
             * Print star for, 
             * first row (i==1) or 
             * last row (i==N) or
             * first column (j==1) or
             * last column (j==N) or 
             * row equal to column (i==j) or 
             * column equal to N-row (j==N-i+1)
             */
            if(i==1 || i==N || j==1 || j==N || i==j || j==(N - i + 1))
            {
               res+= "*";
            }
            else
            {
                res+=" ";
            }
        }
        res+="\n";

    }

return res;
}

var res = HollowSquareDiagnol(5);
console.log(res);