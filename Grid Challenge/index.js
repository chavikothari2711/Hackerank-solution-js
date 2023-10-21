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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    let flag='YES';
    let col=[];
    for(let i=0;i<grid.length;i++){
        let arr= grid[i].split('').sort();
        col.push(arr);
        var first=arr[0];
        
        for(let j=1;j<arr.length;j++){
            if(arr[j].charCodeAt(0)<arr[j-1].charCodeAt(0)){
                flag='NO';
                break;
            }
        }
        if(flag=='NO'){
            break;
        }
    }
    for(let i=0;i<col[0].length;i++){
        
        for(let j=1;j<col.length;j++){
            if(col[j][i].charCodeAt(0)<col[j-1][i].charCodeAt(0)){
                flag='NO';
                break;
            }        }
        if(flag=='NO'){
            break;
        }
    }
   return flag
   

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
