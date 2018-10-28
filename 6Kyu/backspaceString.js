function clean_string(s) {
    var result = '';
    s.split('').forEach(function(char) {
      if (char !== '#') {
        result += char;
      } else if (char === '#' && result.length) {
        result = result.substr(0, result.length - 1);
      }
    });
    return result;    
  }

var res = clean_string("ab##cd#e");
console.log(res);


/*
ab##cd#e
a
ab




*/