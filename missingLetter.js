/**
 * Created by rupakulr on 1/4/2017.
 */


function findMissingLetter(array) {
    var arr = array;
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        //res.push(arr[i]);
        if(i===arr.length-1){
            break;
        }

        var index = letters.indexOf(arr[i]);   //1
        if (arr[i + 1] !== letters[index + 1]) {
            res.push(letters[index + 1]);
        }
    }
return res;

}
findMissingLetter(['a', 'b', 'd','f']);