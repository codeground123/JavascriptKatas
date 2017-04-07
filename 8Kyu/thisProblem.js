function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}


var n = new NamedMe("Phani", "Kumar");

console.log(n.name);