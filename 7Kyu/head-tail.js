function swapHeadAndTail(arr) {
            var res = [];
            if(arr.length ===2 || arr.length ==1 || arr.length == 3){
                return arr.reverse();
            } else if(arr.length % 2 ==0){
                var midIndex = arr.length / 2;
               for(var i=midIndex; i<arr.length; i++){
                   res.push(arr[i])
               }
                for(var i=0; i<=midIndex-1; i++){
                    res.push(arr[i])
                }
                return res;
            }  else if(arr.length % 2 ==1){
                var midIndex = Math.floor(arr.length / 2);
                for(var i=midIndex+1; i<arr.length; i++){
                    res.push(arr[i])
                }
                res.push(arr[midIndex]);
                for(var i=0; i<=midIndex-1; i++){
                    res.push(arr[i])
                }
                return res;
            }
        return res;
}

var res = swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8] );
console.log(res);