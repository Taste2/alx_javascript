#!/usr/bin/node

// import request
const request = require('request');

// pass cmd line argument
const url = process.argv[2];

// make a GET request
request(url, function (response) {
    console.log('code:', response.statusCode)
})
