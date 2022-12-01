'use strict'

var fs = require('fs');

function day1(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        return arr.reduce(function(p,c,i,a) {a.reduce(function(prev,curr,idx,arr) {
            curr += Number(arr[i+idx]);
            prev < curr ? p++ : p;
            prev = curr;
            return p;
        },0)},-1);
    } catch (error) {
        console.log(error);
    }
}

console.log(day1("input.txt"));