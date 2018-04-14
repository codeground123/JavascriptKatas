//https://www.codewars.com/kata/tv-channels

function tvChannels(arr){

var res = {};
var checkObj = {};
var count = 0
for(var i=0;i<arr.length;i++) {
    var str = arr[i]+"";
    var count = 1;
    if(checkObj.hasOwnProperty(arr[i]) === false){
        res[i] = arr[i];
        checkObj[str] = i;
    } else {
        checkObj[str] = i;
    }
} 

return res;

}

var res = tvChannels(['BBC1',
  'Discovery',
  'MTV',
  'Channel 5',
  'Drama',
  'Sky Sport',
  'BBC1',
  'SyFy']); 
console.log(res);