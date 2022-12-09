'use strict'
var fs = require('fs');

function part2(input) {
    try {
        const content = fs.readFileSync(input, 'utf-8');
        const arr = content.split('\r\n');
        let max = 0;
        let localSum = 0;
        let final = 0;
        for (let i = 0; i < arr.length; i++) {
            localSum += +arr[i];
            if (arr[i] === '') {
                final = Math.max(max,localSum);
                localSum = 0;
            }
            if (final > max) {
                max = final;
            }
            final = Math.max(max,localSum)
        }
        return final;
    } catch (error) {
        console.log(error);
    }
}

console.log(part2('input2.txt'));