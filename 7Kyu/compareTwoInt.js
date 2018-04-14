function compareIntegers(a, b) {
  //coding and coding..

  var a = parseInt(a);
  var b = parseInt(b);
 if(a<b){
     return "less";
 }
 if(a > b){
     return "greater";
 }
 return "equal";

  
}

console.log(compareIntegers("999","1000"));