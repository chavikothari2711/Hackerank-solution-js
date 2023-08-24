'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'cipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. STRING s
 */

function cipher(k, s) {
    const ans = [];
    let pref = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        const val = pref ^ (parseInt(s[i]) - 0); 
        ans.push(val);
        pref ^= val;
        
        if (i >= k - 1) {
            pref ^= ans[i - k + 1];
        }
    }
    var arr=ans.slice(0,-(k-1));
    return arr.join('');
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine();

    const result = cipher(k, s);

    ws.write(result + '\n');

    ws.end();
}
