'use strict'

var fs = require('fs');

function day1(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        return arr.reduce(function(p,c,i,a) {a.reduce(function(prev,curr,idx,arr) {
            curr += Number(arr[i+idx]);
            prev < curr ? p++ : p;
            prev = curr;
            return p;
        },0)},-1);

        //old version code commented out

        // let count = -1;
        // let prev = 0;
        // for (let i = 0; i < arr.length-2; i++) {
        //     let curr = 0;
        //     for (let j = 0; j < 3; j++) {
        //         curr += Number(arr[i+j]);
        //     }
        //     if (prev < curr) {
        //         count++;  
        //     }
        //     prev = curr;
        // }
        // return count;

    } catch (error) {
        console.log(error);
    }
}

console.log(day1("input.txt"));