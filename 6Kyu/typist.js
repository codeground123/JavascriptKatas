function typist(s){
  //coding and coding..
    
var strArr = s.split('');

var count = 0;
var capsLock = false;

for(var i=0;i<strArr.length;i++){
  count ++;
  if(strArr[i] === strArr[i].toUpperCase()){
    if(!capsLock){
        capsLock = !capsLock;
        count++;
    } else {
        if(capsLock){
            capsLock = !capsLock;
            count++;
        }
    }
  }
    

}
return count;
}

var res = typist("Aa");
console.log(res);
