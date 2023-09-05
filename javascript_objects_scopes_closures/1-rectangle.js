#!/usr/bin/node
class Rectangle {

    // initialize an instance with these values
    constructor (w, h) {
        this.width = w;
        this.height = h;
    }
}
const r1 = new Rectangle(3, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);