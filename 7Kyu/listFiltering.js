function filter_list(list) {
 
 var res = [];
for(var i=0; i<list.length;i++){
        if( typeof(list[i]) !== 'string'){
            res.push(list[i]);
        }
}
return res;
}

var res = filter_list([1,'a','b',0,15]);
console.log(res);