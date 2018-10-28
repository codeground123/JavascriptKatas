/*
https://www.codewars.com/kata/element-equals-its-index/train/javascript
*/

// function indexEqualsValue(a) {
    
// var found;
// for(var i=0;i<a.length;i++){
//     if(a[i] === i){
//         return i;
//     }
// }
// return -1;
// }

//  USING BINARY SEARCH

function indexEqualsValue(a) {
    if (a[0] === 0)
      return 0;
    let result = -1;
    let value;
    let start = 0;
    let length = a.length - 1;
    let mid;
    while (start != length) {
      mid = Math.floor(( start + length ) / 2);
      value = a[mid];
      if(mid < value) {
        length = mid;
      }
      else if( mid > value ) {
        start = mid + 1;
      }
      else {
        result = value;
        length = mid;
      }
    }
    return result;
  }

var arr = [-5, 1, 10, 3, 88, 5, 7, 10, 15];
  var res =  indexEqualsValue(arr);
  console.log(res);