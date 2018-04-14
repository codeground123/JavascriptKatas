function twoSum(numbers, target) {
 
 var res = [];
 for(var i=0;i<numbers.length;i++){

        for(var j=i+1;j<numbers.length;j++){
            if(numbers[i] + numbers[j] === target){
                res.push(i);
                res.push(j);
            }
        }
 }
 return res;
}

var res = twoSum([2,2,3], 4);
console.log(res);