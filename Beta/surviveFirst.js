function surviveFirst(str) {
  //your code
  var res = [];
  var strArr = str.split('');
  res.push(strArr[0]);

  for(var i=1;i<strArr.length;i++){
      res.push("*");
  }
  return res.join('');
}

var res = surviveFirst('abcdefg');
//abccdefe
console.log(res);