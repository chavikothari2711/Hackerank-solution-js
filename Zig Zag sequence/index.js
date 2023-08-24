function findZigZag(input){
    const middleval = Math.max(...input);
    input.splice(input.indexOf(middleval.toString()),1)
    let arr=[];
    const mid = Math.floor(input.length/2);
    
    for(let i=0;i<mid;i++){
        let smallValue = Math.min(...input);
        let pos = input.indexOf(smallValue.toString());
        input.splice(pos,1);
        arr.push(smallValue.toString());
    }
    
    arr.push(middleval.toString());
    input.sort();
    input.reverse();
    arr.push(...input)
    return arr.join(' ')
}

function processData(input) {
    //Enter your code here
    const x = input.split(/\n| /);  
    var testCase=x[0];
    let pos=1;   
    for(i=1;i<=testCase;i++){
        var key=x[pos];
        var arr=[];
        for(j=0;j<parseInt(key);j++){
            pos+=1;
            arr.push(x[pos]);
        }
        console.log(findZigZag(arr))
        pos+=1;
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
