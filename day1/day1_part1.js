'use strict'

var fs = require('fs');

function day1(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        console.log(arr);
        return arr.reduce(function(p,c,i,a) {c < a[i+1] ? p++ : p; return p;},0) + 1;
    } catch (error) {
        console.log(error);
    }
}

console.log(day1("input.txt"));