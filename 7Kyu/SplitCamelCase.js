function splitter(str){
    let final = [];
    let helper = ""
    str.split("").forEach((e,i,a) => {
        if (helper.length < 1) {
        helper += e;
    } else{
        if (/([A-Z])/.test(e) && /([a-z0-9])/.test(a[i-1])) {
            final.push(helper)
            helper = ""
            helper += e;
        } else {
            helper += e;
        }
        if (i === a.length - 1) {
            final.push(helper);
        }
    }
});
    return final.join(" ");
}
var res = splitter("StringString");
console.log(res);