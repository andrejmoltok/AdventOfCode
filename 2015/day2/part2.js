'use strict'

var fs = require('fs');

function part2(input) {
    const content = fs.readFileSync(input, 'utf-8');
    const arr = content.split(/\r?\n/);
    let convert = [];
    arr.forEach(function(v) {
        convert.push(v.split('x').sort((a,b) => +a - +b));
    });
    //console.log(convert);
    let sum = 0;
    return convert.map(function(v,i,a) {
        sum = 2*v[0] + 2*v[1] + (v[0]*v[1]*v[2]);
        return sum;
    }).reduce((p,c) => p+c,0);
}

console.log(part2('input.txt'));