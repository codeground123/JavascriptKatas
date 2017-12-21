/**
 * Created by rupakulr on 23/08/17.
 */
// Average runtime: ?ms

function addedChar(s1, s2){
    // your code here
    var sec = s2.split('');
var res;
    for(var i=0;i<s1.length;i++){

        for(var j=0;j<sec.length;j++){
            if(s1[i] === sec[j]){
                sec.splice(j,1);
            }
        }

    }
    return sec[0];
}

var res = addedChar('hello','aaahello');
console.log(res);
