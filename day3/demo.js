'use strict'

var fs = require('fs');

function lifesupport(input) {
    try {
        //entry
        const contents = fs.readFileSync(input, 'utf-8');
        const arr = contents.split(/\r?\n/);

        //phase one
        let phase11 = [];
        let phase10 = [];
        arr.forEach(function(v,i,a) {a[i][0] == '1' ? phase11.push(a[i]) : phase10.push(a[i])});

        //phase two
        let phase21 = [];
        let phase20 = [];
        if (phase11.length > phase10.length) {
            phase11.forEach(function(v,i,a) {a[i][1] == '1' ? phase20.push(a[i]) : phase21.push(a[i])});
        } else {
            phase10.forEach(function(v,i,a) {a[i][1] == '1' ? phase20.push(a[i]) : phase21.push(a[i])});
        }

        //phase three
        let phase31 = [];
        let phase30 = [];
        if (phase21.length > phase20.length) {
            phase21.forEach(function(v,i,a) {a[i][2] == '1' ? phase30.push(a[i]) : phase31.push(a[i])});
        } else {
            phase20.forEach(function(v,i,a) {a[i][2] == '1' ? phase30.push(a[i]) : phase31.push(a[i])});
        }

        //phase four
        let phase41 = [];
        let phase40 = [];
        if (phase31.length > phase30.length) {
            phase31.forEach(function(v,i,a) {a[i][3] == '1' ? phase40.push(a[i]) : phase41.push(a[i])});
        } else {
            phase30.forEach(function(v,i,a) {a[i][3] == '1' ? phase40.push(a[i]) : phase41.push(a[i])});
        }

        //phase five
        let phase51 = [];
        let phase50 = [];
        if (phase41.length > phase40.length) {
            phase41.forEach(function(v,i,a) {a[i][4] == '1' ? phase50.push(a[i]) : phase51.push(a[i])});
        } else {
            phase40.forEach(function(v,i,a) {a[i][4] == '1' ? phase50.push(a[i]) : phase51.push(a[i])});
        }

        //phase six
        let phase61 = [];
        let phase60 = [];
        if (phase51.length > phase50.length) {
            phase51.forEach(function(v,i,a) {a[i][5] == '1' ? phase60.push(a[i]) : phase61.push(a[i])});
        } else {
            phase50.forEach(function(v,i,a) {a[i][5] == '1' ? phase60.push(a[i]) : phase61.push(a[i])});
        }

        //phase seven
        let phase71 = [];
        let phase70 = [];
        if (phase61.length > phase60.length) {
            phase61.forEach(function(v,i,a) {a[i][6] == '1' ? phase70.push(a[i]) : phase71.push(a[i])});
        } else {
            phase60.forEach(function(v,i,a) {a[i][6] == '1' ? phase70.push(a[i]) : phase71.push(a[i])});
        }

        //phase eight
        let phase81 = [];
        let phase80 = [];
        if (phase71.length > phase70.length) {
            phase71.forEach(function(v,i,a) {a[i][7] == '1' ? phase80.push(a[i]) : phase81.push(a[i])});
        } else {
            phase70.forEach(function(v,i,a) {a[i][7] == '1' ? phase80.push(a[i]) : phase81.push(a[i])});
        }

        
        //phase nine
        let phase91 = [];
        let phase90 = [];
        if (phase81.length > phase80.length) {
            phase81.forEach(function(v,i,a) {a[i][8] == '1' ? phase90.push(a[i]) : phase91.push(a[i])});
        } else {
            phase80.forEach(function(v,i,a) {a[i][8] == '1' ? phase90.push(a[i]) : phase91.push(a[i])});
        }
        
        //phase ten
        let phase101 = [];
        let phase100 = [];
        if (phase91.length > phase90.length) {
            phase91.forEach(function(v,i,a) {a[i][9] == '1' ? phase100.push(a[i]) : phase101.push(a[i])});
        } else {
            phase90.forEach(function(v,i,a) {a[i][9] == '1' ? phase100.push(a[i]) : phase101.push(a[i])});
        }

        //phase eleven
        var oxygen = 0;
        if (phase100.length > phase101.length) {
            phase100.forEach(function(v,i,a) {return a[i][10] == '1' ? oxygen = a[i] : "error";});
        } else {
            phase101.forEach(function(v,i,a) {return a[i][10] == '1' ? oxygen = a[i] : "error";});
        }

        //CO2 Scrubbing Meter

        //phase one
        let phase11co2 = [];
        let phase10co2 = [];
        arr.forEach(function(v,i,a) {a[i][0] == '0' ? phase10co2.push(a[i]) : phase11co2.push(a[i])});

        //phase two
        let phase21co2 = [];
        let phase20co2 = [];
        if (phase10co2.length < phase11co2.length) {
            phase10co2.forEach(function(v,i,a) {a[i][1] == '0' ? phase20co2.push(a[i]) : phase21co2.push(a[i]);});
        } else {
            phase11co2.forEach(function(v,i,a) {a[i][1] == '0' ? phase20co2.push(a[i]) : phase21co2.push(a[i]);});
        }

        //phase three
        let phase31co2 = [];
        let phase30co2 = [];
        if (phase20co2.length < phase21co2.length) {
            phase20co2.forEach(function(v,i,a) {a[i][2] == '0' ? phase30co2.push(a[i]) : phase31co2.push(a[i]);});
        } else {
            phase21co2.forEach(function(v,i,a) {a[i][2] == '0' ? phase30co2.push(a[i]) : phase31co2.push(a[i]);});
        }

        //phase four
        let phase40co2 = [];
        let phase41co2 = [];
        if (phase30co2.length < phase31co2.length) {
            phase30co2.forEach(function(v,i,a) {a[i][3] == '0' ? phase40co2.push(a[i]) : phase41co2.push(a[i]);});
        } else {
            phase31co2.forEach(function(v,i,a) {a[i][3] == '0' ? phase40co2.push(a[i]) : phase41co2.push(a[i]);});
        }

        //phase five
        let phase50co2 = [];
        let phase51co2 = [];
        if (phase40co2.length < phase41co2.length) {
            phase40co2.forEach(function(v,i,a) {a[i][4] == '0' ? phase50co2.push(a[i]) : phase51co2.push(a[i]);});
        } else {
            phase41co2.forEach(function(v,i,a) {a[i][4] == '0' ? phase50co2.push(a[i]) : phase51co2.push(a[i]);});
        }

        //phase six
        let phase60co2 = [];
        let phase61co2 = [];
        if (phase50co2.length < phase51co2.length) {
            phase50co2.forEach(function(v,i,a) {a[i][5] == '0' ? phase60co2.push(a[i]) : phase61co2.push(a[i]);});
        } else {
            phase51co2.forEach(function(v,i,a) {a[i][5] == '0' ? phase60co2.push(a[i]) : phase61co2.push(a[i]);});
        }

        //phase seven
        let phase70co2 = [];
        let phase71co2 = [];
        if (phase60co2.length < phase61co2.length) {
            phase60co2.forEach(function(v,i,a) {a[i][6] == '0' ? phase70co2.push(a[i]) : phase71co2.push(a[i]);});
        } else {
            phase61co2.forEach(function(v,i,a) {a[i][6] == '0' ? phase70co2.push(a[i]) : phase71co2.push(a[i]);});
        }

        //phase eight
        let phase80co2 = [];
        let phase81co2 = [];
        if (phase70co2.length < phase71co2.length) {
            phase70co2.forEach(function(v,i,a) {a[i][7] == '0' ? phase80co2.push(a[i]) : phase81co2.push(a[i]);});
        } else {
            phase71co2.forEach(function(v,i,a) {a[i][7] == '0' ? phase80co2.push(a[i]) : phase81co2.push(a[i]);});
        }

        //phase nine
        let phase90co2 = [];
        let phase91co2 = [];
        if (phase80co2.length < phase81co2.length) {
            phase80co2.forEach(function(v,i,a) {a[i][8] == '0' ? phase90co2.push(a[i]) : phase91co2.push(a[i]);});
        } else {
            phase81co2.forEach(function(v,i,a) {a[i][8] == '0' ? phase90co2.push(a[i]) : phase91co2.push(a[i]);});
        }

        //phase ten
        var co2 = 0;
        if (phase90co2.length < phase91co2.length) {
            phase90co2.forEach(function(v,i,a) {return a[i][9] == '0' ? co2 = a[i] : "error";});
        } else {
            phase91co2.forEach(function(v,i,a) {return a[i][9] == '0' ? co2 = a[i] : "error";});
        }
        
        console.log(parseInt(oxygen,2));
        console.log(parseInt(co2,2));
        console.log(oxygen);
        console.log(co2);
        return parseInt(oxygen,2) * parseInt(co2,2);
    } catch (error) {
        console.log(error);
    }
}

console.log(lifesupport("input.txt"));