'use strict'

var fs = require('fs');

function day2(input) {
    try {
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);

        let arr2 = [];
        
        arr.reduce(function(p,c,i,a) {
            arr2.push(c.split(' '));
        },0);

        //console.log(arr2);

        let depth = 0;
        let horiz = 0;
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i][0] == 'forward') {
                horiz += Number(arr2[i][1]);
                console.log("horiz: " + horiz);
            } else if (arr2[i][0] == 'down') {
                depth += Number(arr2[i][1]);
                console.log("down:" + depth);
            } else if (arr2[i][0] == 'up') {
                depth -= Number(arr2[i][1]);
                console.log("up:" + depth);
            }
        }
        //console.log('horiz ',horiz,' depth ',depth);
        return horiz * depth;
    } catch (error) {
        console.log(error);
    }
}

console.log(day2("input.txt"));