function asteriscIt(n) {

    var arr = n;
    if(typeof arr === 'string'){
        arr =  n.split('');
    }

    var res ="";
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0 && (arr[i+1])%2===0){
            res+= arr[i]+"*";//+arr[i+1];
        } else { //if(arr[i] %2 !== 0) {
            res+=arr[i];
        }
    }
    return res;
};

var res = asteriscIt("5312708");
console.log(res);

//32*2*2