'use strict'

var fs = require('fs');

function day1(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        // console.log(arr);
        let count = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let prev = 0;
            for (let j = 0; j < 3; j++) {
                prev += Number(arr[i+j]);
            }
            if (sum < prev) {
                count++;
                sum = prev;
                console.log(sum, prev);
            }
            
        }
        return count;
    } catch (error) {
        console.log(error);
    }
}

console.log(day1("input.txt"));