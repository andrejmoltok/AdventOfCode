'use strict'

var fs = require('fs');

function day3(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);
        let arr2 = [];
        for (let a = 0; a < arr[a].length; a++) {
            arr2.push(new Array());
        }
        for (let i = 0; i < arr.length; i++) { //12
            for (let j = 0; j < arr[i].length; j++) {
                arr2[j].push(arr[i][j]);
            }
        }
        let max = [];
        for (let b = 0; b < arr2.length; b++) {
            let zero = 0;
            let one = 0;
            for (let c = 0; c < arr2[b].length; c++) {
                if (arr2[b][c] == '0') {
                    zero++;
                } else if (arr2[b][c] == '1') {
                    one++;
                }
            }
            max.push([zero,one]);
        }
        console.log(max);
        let gammarate = "";
        let epsrate = "";
        for (let d = 0; d < max.length; d++) {
            let myMax = Math.max.apply(0,max[d]);
            let myMin = Math.min.apply(0,max[d]);
            myMax == max[d][0] ? gammarate += 0 : myMax == max[d][1] ? gammarate += 1 : 'error';
            myMin == max[d][0] ? epsrate += 0 : myMin == max[d][1] ? epsrate += 1 : 'error';
        }
        console.log(gammarate);
        console.log(epsrate);
        return parseInt(gammarate,2) * parseInt(epsrate,2);
    } catch (error) {
        console.log(error);
    }
}

console.log(day3("input.txt"));