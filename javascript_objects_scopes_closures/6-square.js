#!/usr/bin/node
class Rectangle {

    // initialize an instance with these values
    constructor (w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        }else {
            return 'Rectangle {}';
        }
    }

    print () {
        for (let i = 1; i <= this.height; i++) {
            const rect_X = 'X'.repeat(this.width);
            console.log(rect_X);
        }
    }

    rotate () {
        const ht = this.height;
        this.height = this.width;
        this.width = ht;
    }

    double () {
        this.width *= 2;
        this.height *= 2;
    }
}

class Square extends Rectangle {

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
