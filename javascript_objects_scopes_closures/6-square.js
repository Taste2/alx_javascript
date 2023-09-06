#!/usr/bin/node

//import class Square
const Square_ = require ('./5-square');

//Square inherits form Square
class Square extends Square_ {

    constructor (size) {
        super(size, size);
    }

    charPrint(c) {
        if (c === 'C') {
            for (let i = 1; i <= this.height; i++) {
                const rect_c = 'C'.repeat(this.width);
                console.log(rect_c);
            }
        } else {
            for (let i = 1; i <= this.height; i++) {
                const rect_X = 'X'.repeat(this.width);
                console.log(rect_X);
            }
        }
    }
}
const s1 = new Square(4);
s1.charPrint();

s1.charPrint('C');
module.exports = Square;
