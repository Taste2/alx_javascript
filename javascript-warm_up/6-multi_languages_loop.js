#!/usr/bin/node
/*
Write a script that prints 3 lines: (like 1-multi_languages.js)
but by using an array of string and a loop
*/
const c_ = 'C is fun';
const python_ = 'Python is cool';
const java_ = 'JavaScript is amazing';
const progLanguages = [c_, python_, java_];

for (let i = 0; i < 3; i++) {
  console.log(progLanguages[i]);
}
