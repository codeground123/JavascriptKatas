function spot(s1,s2){
  // Code here

var strOne = s1.split('');
var strTwo = s2.split('');

var res = [];
  for(var i=0;i<strOne.length;i++){
      if(strOne[i] !== strTwo[i]){
            res.push(i);
      }

  }
  return res;
}

var res = spot('Hello World!', 'hello world.');
console.log(res);