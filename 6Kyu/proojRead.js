function proofread (str) {
    str = str.toLowerCase();
    var arrS = str.split("");
    console.log(arrS);
    for(var i = 0; i < arrS.length; i++) {
        if(arrS[i] + arrS[i + 1] === "ie") {
            arrS[i] = "e";
            arrS[i + 1] = "i";
        } else if(arrS[i] + arrS[i + 1] === ". ") {
            arrS[i + 2] = arrS[i + 2].toUpperCase();
        }
    }
    arrS[0] = arrS[0].toUpperCase();
    return arrS.join("");
}
var res = proofread("In the winter. itâs nice to go for a sliegh ride.");
console.log(res);