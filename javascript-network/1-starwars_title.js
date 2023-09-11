#!/usr/bin/node

// import request
const { parse } = require('path');
const request = require('request');


// pass cmd line argument
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/'+id;

// make a GET request
request
.get(url)
.on('response', function (response) {
    const data = response.JSON(parse)
    console.log(data.title)
})
