//https://www.codewars.com/kata/lucky-bus-ticket/train/javascript


function isLucky(ticket) {

    if(ticket.length ==6){
            return ticket.substr(0,3) === ticket.substr(3,6).split('').reverse().join('');
    }
    return false;
}


var res = isLucky("12a12a");

console.log(res);