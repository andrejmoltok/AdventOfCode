'use strict'
var fs = require('fs');

function part1(input) {
    try {
        const content = fs.readFileSync(input, 'utf-8');
        const arr = content.split('\r\n');
        console.log(arr);
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            let localSum = 0;
            localSum += +arr[i] + +arr[i+1];
            console.log(localSum);
            if (arr[i] === '') {
                Math.max(max,localSum);
            }
            if (localSum > max) {
                max = localSum;
            }
        }

        return max;
    } catch (error) {
        console.log(error);
    }
}

console.log(part1('input2.txt'));