'use strict'

var fs = require('fs');

function day3(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        function oxygen(arr,x) {
            const zero = arr.filter((v,i,a) => a[i][x] == '0');
            const one = arr.filter((v,i,a) => a[i][x] == '1');
            if (arr.length === 1 && x == 12) {
                return arr[0];
            } else if (arr.length > 1 && x < 12) {
                console.log(Math.max(zero.length,one.length) ? oxygen(one,x+1) : oxygen(zero,x+1));
                console.log(Math.min(zero.length,one.length) ? oxygen(one,x+1) : oxygen(zero,x+1));
                
            }
            return parseInt(one[0],2) * parseInt(zero[0],2);
        }
        oxygen(arr,0);
    } catch (error) {
        console.log(error);
    }
}

console.log(day3("input.txt"));