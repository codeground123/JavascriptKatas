//https://www.codewars.com/kata/without-the-letter-e/train/javascript

function findE(str){
        if(!str){
            return 'None';
        }
        if(str === ""){
            return "";
        }
        var strArr = str.split('');
        var count = 0;
        for(var i=0;i<strArr.length;i++){
                if(strArr[i].toLowerCase() === 'e'){
                    count +=1;
                }
        }
        if(count == 0){
            return 'There is no "e".';
        }
        return count;
}

var res = findE('English');
//abccdefe
console.log(res);