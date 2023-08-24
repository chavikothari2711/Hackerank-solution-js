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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
   var t = s.slice(s.length-2,);
   var x = s.slice(0,s.length-2);
   var h = x.slice(0,2);
    h = parseInt(h);
    var restd = x.slice(2,); 
   if(t=='AM') {
       if(h===12)h='00';
       else h=x.slice(0,2);
   }
   else{
       if(h===12)h='12';
       else h=(h+12).toString();
   }
    
    restd = h+restd;
    return (restd);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
