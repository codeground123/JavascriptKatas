/**
 * Created by rupakulr on 18/08/17.
 */
function validParanthesis(parens){

    var stack = [],
        i;

    for (i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            stack.push(parens[i]);
        }
        else if('(' !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
}

var res = validParanthesis(")(");
console.log(res);