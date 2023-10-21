'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the xorMatrix function below.
 */
function xorMatrix(m, first_row) {
    const n = first_row.length;
    m -= 1; // now 0 row is first row, 1 row is the first row to compute
    const mb = m.toString(2);
    const lmb = mb.length;
    let result = [...first_row];
    
    for (let i = 0; i < lmb; i++) {
        if (mb[i] === '1') {
            const tmp = [...result];
            const offset = 2 ** (lmb - 1 - i);
            
            for (let j = 0; j < n; j++) {
                result[j] = tmp[j] ^ tmp[(j + offset) % n];
            }
        }
    }
    return(result);
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const first_row = readLine().split(' ').map(first_rowTemp => parseInt(first_rowTemp, 10));

    let last_row = xorMatrix(m, first_row);

    ws.write(last_row.join(" ") + "\n");

    ws.end();
}
