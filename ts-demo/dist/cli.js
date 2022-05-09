"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = __importStar(require("./calc"));
var readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});
rl.prompt();
var calc = new calc_1.default();
// const supportedCommands: Command[] = "add subtract multiply divide clear".split(' ');
rl.on('line', function (line) {
    var input = line.split(' ');
    var commandStr = input[0];
    var operandStr = input[1];
    var operand = Number(operandStr);
    var command;
    if ((0, calc_1.isCommand)(commandStr)) {
        command = commandStr;
    }
    else {
        console.log('unsupported command');
        rl.prompt();
        return;
    }
    switch (line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            // console.log(`Say what? I might have heard '${line.trim()}'`);
            calc.compute(command, operand);
            calc.print();
            break;
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
