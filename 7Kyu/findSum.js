function findSum(n) {

var count = 0;

for(var i=0; i<=n; i++){
    if(i%3 === 0){
        count += i;
    }
    if(i%5===0){
        count+=i;
    }
}

  return count;
}

var res = findSum(10);
console.log(res);