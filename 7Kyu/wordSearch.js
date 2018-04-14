function wordSearch(query, seq){

var res = [];

for(var i=0;i<seq.length;i++){
    if(seq[i].toLowerCase().indexOf(query.toLowerCase()) > -1){
        res.push(seq[i].toLowerCase());
    }
}
if(res.length === 0){
    res.push("Empty");
    return res;
}
return res;

}

var res = wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]);
console.log(res);

