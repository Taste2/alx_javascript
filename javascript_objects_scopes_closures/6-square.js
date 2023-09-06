#!/usr/bin/node
const Square = require ('./5-square');

class Square extends Square {

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

module.exports = Square;
