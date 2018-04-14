function removeExclamationMarks(s) {
  
var arr = s.split('');
for(var i=0;i<arr.length;i++){
    if(arr[i] === '!'){
        arr.splice(i,1);
        i-=1;

    }
}
return arr.join('');
}
var res = removeExclamationMarks("Hell world!!");
console.log(res);

// function removeExclamationMarks(s) {
//   var arr =s.split("");
//   arr = arr.filter(function(e){
//         return e !== "!";
//     })
//     return arr.join("");
// }