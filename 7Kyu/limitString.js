function solution(string,limit){

    if(string.length <= limit){
        return string;
    }
    return string.substring(0,limit)+'...';
}

var res = solution("Test",4);
console.log(res);
