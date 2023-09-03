#!/usr/bin/node
/*
A function that increments and calls a function.
*/

exports.addMeMaybe = function (number, theFunction) {
  const number = number + 1;
  theFunction();
};
