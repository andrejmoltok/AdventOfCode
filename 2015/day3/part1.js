'use strict'

var fs = require('fs');

function part1(input) {
    try {
    const content = fs.readFileSync(input, 'utf-8');
    const arr = content.split('');
    //console.log(arr.length);
    let present = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        
    }
    return present;
    }
    catch (error) {
        console.log(error);
    }
}

console.log(part1('input2.txt'));