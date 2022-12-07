'use strict'

var fs = require('fs');

function part1(input) {
    const content = fs.readFileSync(input, 'utf-8');
    const arr = content.split('');
    //console.log(arr);
    let floor = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') {
            floor++;
        } else if (arr[i] == ')') {
            floor--;
        }
        console.log(i, arr[i], floor);
    }
    return floor;
}

console.log(part1('input.txt'));