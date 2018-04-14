function bandNameGenerator(str) {
  // Happy coding

  var strArr = str.split('');

  if(strArr[0] === strArr[str.length-1]){
      return str[0].toUpperCase()+str.slice(1)+str.slice(1);
  }
  return "The " + str[0].toUpperCase()+str.slice(1);

}

var res = bandNameGenerator('knife');
console.log(res);