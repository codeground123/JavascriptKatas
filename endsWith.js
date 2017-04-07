/**
 * Created by rupakulr on 1/6/2017.
 */
function solution(str, ending){

    return str.lastIndexOf(ending) > -1 && str.lastIndexOf(ending) == (str.length - ending.length);


}

var res = solution('samurai', 'ra');
console.log(res);


