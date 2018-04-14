function printStars(rows, columns) {
  var output = "";
  for(var i=0;i<rows;i++){
        for(var j=0;j<columns;j++){
            output+="*";
        }
        output+="\n";
  }
  return output.trim();
}

var res = printStars(3,4);
console.log(res);