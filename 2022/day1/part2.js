'use strict'
var fs = require('fs');

function part2(input) {
    try {
        const content = fs.readFileSync(input, 'utf-8');
        const arr = content.split('\r\n');
        //console.log(arr);
        let max = 0;
        let localSum = 0;
        let final = 0;
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            var mySum = 0;
            localSum += +arr[i];
            if (arr[i] === '') {
                mySum = Math.max(max,localSum);
                newArr.push(localSum);
                localSum = 0;
            }
            if (mySum > 0) {
                max = mySum;
            }
            newArr
            final = Math.max(max,localSum);
        }
        return newArr;
    } catch (error) {
        console.log(error);
    }
}

console.log(part2('input2.txt'));