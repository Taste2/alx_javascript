#!/usr/bin/node

// import request
const { isUtf8 } = require('buffer');
const { parse } = require('path');
const request = require('request');


// pass cmd line argument
const url = process.argv[2];

parts = [];
// make a GET request
request
.get(url+18, {encoding: 'utf-8'})
.on('data', function (data) {
    response = JSON.parse(data);
    let count_ = 0;
    for(let i = 1; i <= response.films.length; 1++) {
        count_++;
    }
    console.log(count_);
})
