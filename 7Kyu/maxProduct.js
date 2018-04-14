function maxProduct(a) {
  
  var firstMax = Math.max.apply(null,a);
  var index = a.indexOf(firstMax);
  
  a.splice(index,1);

  var secMax = Math.max.apply(null,a);

  return firstMax * secMax;
}

var res = maxProduct([2, 1, 5, 0, 4, 3]);
console.log(res);