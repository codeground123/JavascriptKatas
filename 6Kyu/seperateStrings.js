function sepStr(a) {
  var res = [];
  var longWord = findLong(a);
var arr = a.split(' ');
for(var i=0;i<longWord;i++){
      var temp = [];
      res.push(temp);
}

  for(var i=0;i<arr.length;i++){
  
        for(var j=0;j<longWord;j++){
            var wordArr = arr[i].split('');
            if(typeof  wordArr[j] === 'undefined'){
                res[j].push('');
            } else {
                res[j].push(wordArr[j]);
            }           
        }
  }
  return res;
}

function findLong(s){
  return Math.max.apply(null, s.split(' ').map(w => w.length));
}

var res = sepStr("The Mitochondria is the powerhouse of the cell");
console.log(res);