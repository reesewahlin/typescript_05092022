import Calc, { Command, isCommand } from "./calc";

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

const calc = new Calc();

// const supportedCommands: Command[] = "add subtract multiply divide clear".split(' ');

rl.on('line', (line: string) => {

  const input = line.split(' ');

  const commandStr: string = input[0];
  const operandStr: string = input[1];
  const operand: number = Number(operandStr);
  let command: Command;

  if (isCommand(commandStr)) {
    command = commandStr;
  } else {
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
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});