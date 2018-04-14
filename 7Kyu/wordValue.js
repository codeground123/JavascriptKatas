function wordValue(arr) {

var res = [];
  for(var i=0; i<arr.length;i++){
    var temp = getAlphaValue(arr[i]);
    res.push(temp * (i+1));
  }
  
  return res;

}
function getAlphaValue(str){
      var alphabets = "abcdefghijklmnopqrstuvwxyz";
      var cnt = 0;
    for(var i=0;i<str.length;i++){
        var index = alphabets.indexOf(str[i]) +1;
        if(index !== -1){
                cnt+=index; 
        }
        
    }
    return cnt;
}

var res = wordValue(["abc", "abc abc", "abc" , "abc"]);
console.log(res);