// Sample code to perform I/O:

console.log("Reading input started, press Ctrl+D to submit and close input process.");

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    console.log("\n");
    
    x = input

    let myArr = x.match(/z/g);
    z_count = myArr.length

    myArr = x.match(/o/g);
    o_count = myArr.length;

    if (o_count != 2 * z_count) {
        console.log("No, number of Os is not double of number of Zs.");
        return
    }

    pattern = /^[z]+[o]+$/g;

    if(pattern.test(x)) {
        console.log('Yes, both tests cleared.');
    } else {
        console.log('No. Input is not following the pattern ^[z]+[o]+$');
    }
 
}
