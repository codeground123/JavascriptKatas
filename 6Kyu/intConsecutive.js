function sumConsecutives(s) {
    var sum = 0,
        sums = [];
    for( var i = 0; i < s.length; i++){
        sum += s[i];
        if(s[i] != s[i+1]){
            sums.push(sum);
            sum = 0;
        }
    }
    return sums;
}

var res = sumConsecutives([1,2,2,3,3,3]);
console.log(res);