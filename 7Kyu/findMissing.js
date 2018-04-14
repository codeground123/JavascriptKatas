function findMissing(arr1, arr2) {
  // Your solution here
  if(arr2.length === 0){
      return arr1[0];
  }
for(var i=0;i<arr1.length;i++){
  for(var j=0; j<arr2.length;j++) {
        if(arr1[i] === arr2[j]){
            arr1.splice(i,1);
            arr2.splice(j,1);
            j=j=1;
            i=i-1;
        }
    }
}
    return arr1[0];
}
var res = findMissing([7], []);
console.log(res);
