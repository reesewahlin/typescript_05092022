"use strict";
var readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});
rl.prompt();
rl.on('line', function (line) {
    switch (line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log("Say what? I might have heard '".concat(line.trim(), "'"));
            break;
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
