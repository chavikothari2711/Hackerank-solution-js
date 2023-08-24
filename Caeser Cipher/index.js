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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
   if(k<=0){
       return s;
   }else{
        var output="";
       for(let i=0;i<s.length;i++){
           var c = s[i];
           if (c.match(/[a-z]/i)) {
                var code = s.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    c = String.fromCharCode(((code - 65 + k) % 26) + 65);
                }else if (code >= 97 && code <= 122) {
                    c = String.fromCharCode(((code - 97 + k) % 26) + 97);
                }
            }
            output += c;
       }
       return output;
   }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
