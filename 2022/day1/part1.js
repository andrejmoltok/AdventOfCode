'use strict'
var fs = require('fs');

function part1(input) {
    try {
        const content = fs.readFileSync(input, 'utf-8');
        const arr = content.split('\r\n');
        //console.log(arr);
        let max = 0;
        let localSum = 0;
        let final = 0;
        for (let i = 0; i < arr.length; i++) {
            var mySum = 0;
            localSum += +arr[i];
            if (arr[i] === '') {
                mySum = Math.max(max,localSum);
                localSum = 0;
            }
            if (mySum > 0) {
                max = mySum;
            }
            final = Math.max(max,localSum)
            //console.log(localSum, mySum);
        }
       
        return final;
    } catch (error) {
        console.log(error);
    }
}

console.log(part1('input.txt'));