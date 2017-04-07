//https://www.codewars.com/kata/format-text


function format(text, width) {
    var words = text.split(' '),
        result = '',
        currentLine = words[0],
        i = 0;

    for (i = 1; i < words.length; i++) {
        if (currentLine.length + 1 + words[i].length <= width) {
            currentLine = currentLine.concat(' ' + words[i]);
        } else if (currentLine != '' && currentLine.length + 1 + words[i].length > width) {
            result = result.concat(currentLine + '\n');
            currentLine = words[i];
        }
    }

    result = result.concat(currentLine);

    return result;
}

var text = "How are you";

var res = format(text, 8);

console.log(res);