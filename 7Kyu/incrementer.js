function incrementer(num) { 
 

 if(num.length ===0 ){
     return [];
 }
 var temp = num[0]+1;
 var res =[];
 res.push(temp);
 for(var i=1;i<=num.length;i++){
     if(i=== num.length)
     break;
     var temp = num[i] + (i+1);
     if(temp>=10){
        temp = temp%10;
     }
        res.push(temp);
 }
 return res;
}

var res = incrementer([1,2,9]);

console.log(res);