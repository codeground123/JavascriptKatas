var sampleItinerary = [
    {in: "TRN", out: "FCO"},
    {in: "FCO", out: "JFK"},
    {in: "JFK", out: "FCO"}
];

function itinerary(travel) {

var airports = [];

    for(var i=0;i<travel.length;i++){
        airports.push(travel[i].in);
        if(i===travel.length-1 || travel[i].out !== travel[i+1].in){
            airports.push(travel[i].out);
        }
    }
return airports.join("-");

}

var res = itinerary(sampleItinerary);
console.log(res);