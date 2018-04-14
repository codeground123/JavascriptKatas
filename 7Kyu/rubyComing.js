function isRubyComing(list) {
 
 var res = false;
for(var i=0;i<list.length;i++){
    if(list[i].language === 'Ruby'){
       res = true;
    }
}
return res;

}

var data = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

var res = isRubyComing(data);
console.log(res);