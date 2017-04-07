

var arr = [
    {empName:"phani", salary:20000},
    {empName:"Rajesh", salary:10000},
    {empName:"Kunal"},
    {empName:"Ram", salary:9000}
];


var res = arr.filter(function(item){
    try {
        return item[0].salary > 20;
    } catch (e) {
        console.log("phani "+ e.message);
    }
});

console.log(res);