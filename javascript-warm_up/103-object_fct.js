#!/usr/bin/node
/*
Update this script by adding a new
function incr that increments the integer value.
*/
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function () {
  this.value += 1;
}

myObject.incr.display = '[Function]';

myObject.incr.toString = function () {
  return this.display;
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
