'use strict'

var fs = require('fs');

function part1(input) {
    const content = fs.readFileSync(input, 'utf-8');
    const arr = content.split(/\r?\n/);
    let convert = [];
    arr.forEach(function(v) {
        convert.push(v.split('x'));
    });
    //console.log(convert);
    let sum = 0;
    return convert.map(function(v,i,a) {
        sum = 2*v[0]*v[1] + 2*v[1]*v[2] + 2*v[0]*v[2] + Math.min((v[0]*v[1]),(v[1]*v[2]),(v[0]*v[2]));
        return sum;
    }).reduce((p,c) => p+c,0);
}

console.log(part1('input.txt'));