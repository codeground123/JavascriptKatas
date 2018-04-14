function incrementer(num) { 
  //code goes here
  var res = [];
  for(var i=0;i<num.length;i++){

      var temp = num[i] + (i+1);
      if(temp >=10){
          temp = temp%10;
      }
      res.push(temp);
  }
  return res;
}

var res = incrementer([3,6,9,8,9]);
console.log(res);