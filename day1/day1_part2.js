'use strict'

var fs = require('fs');

function day1(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        // console.log(arr);
        let count = -1;
        let prev = 0;
        for (let i = 0; i < arr.length-2; i++) {
            let curr = 0;
            for (let j = 0; j < 3; j++) {
                curr += Number(arr[i+j]);
                //console.log(i,j,arr[i+j]);
            }
            if (prev < curr) {
                prev = curr;
                count++;  
            }
            //console.log(prev, curr,count);
        }
        console.log(arr.length);
        return count;
    } catch (error) {
        console.log(error);
    }
}

console.log(day1("input.txt"));