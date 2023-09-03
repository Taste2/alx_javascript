#!/usr/bin/node
/*
Update this script by adding a new
function incr that increments the integer value.
*/
let myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject = {
  type: 'object',
  value: 12,
  incr () {
    myObject.value += 1;
  },
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
