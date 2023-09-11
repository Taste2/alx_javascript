#!/usr/bin/node

// import request
const request = require('request');


// pass cmd line argument
const url = process.argv[2];

// make a GET request
request
.get(url+18, {encoding: 'utf-8'})
.on('data', function (data) {
    response = JSON.parse(data);
    const count_ = response.films.length;
    console.log(count_);
})
