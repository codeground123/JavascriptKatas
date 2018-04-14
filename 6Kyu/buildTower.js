//https://www.codewars.com/kata/build-tower


function getNumOfPrimes(num){
  var primes= [];
  for(var i=1;i<=num*2-1;i+=2){
    primes.push(i);
  }
  return primes;
}

function buildTower(num) {

var primes = getNumOfPrimes(num);
var res = [];
var count = num;
    for(var i=1; i <= num; i++){
        var numofStars = "";
        var txt = '';
        for(var j= count-1; j>0; j--){
            txt+=" ";
        }
      
        for(var k =0; k<primes[i-1];k++){
            txt+="*";
        }

        for(var l= count-1; l>0; l--){
            txt+=" ";
        }        
        txt+='';
        res.push(txt);
        count-=1;
    }
    
    return res;

}



var res = buildTower(6);
console.log(res);