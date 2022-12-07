'use strict'

var fs = require('fs');

function part2(input) {
    const content = fs.readFileSync(input, 'utf-8');
    const arr = content.split('');
    //console.log(arr.length);
    let floor = 0;
    for (var i = 0; i < arr.length; i++) {
        if (floor == -1) {
            return i;
        }
        if (arr[i] == '(') {
            floor++;
        } else if (arr[i] == ')') {
            floor--;
        }
        //console.log(i, floor, arr[i]);
    }
}

console.log(part2('input.txt'));