
// export type Command2 = 'add' | 'subtract' |'multiply' |'divide' | 'clear' | 'history';

const supportedCommands = ["add", "subtract", "multiply", "divide", "clear", "history"] as const
export type Command = typeof supportedCommands[number]

export function isCommand(x: any): x is Command {
    return supportedCommands.includes(x);
}

export type Record = {
    command: Command,
    operand: number,
    id: number;
}

class Calc {

    result: number;
    history: Record[];
    lastId: number;

    constructor() {
        this.result = 0;
        this.history = [];
        this.lastId = 0;
    }

    compute(command: Command, operand: number) {
        this.history.push({
            command,
            operand,
            id: ++this.lastId,
        });
        switch (command) {
            case "add":
                this.result = this.result + operand;
                return;
            case "divide":
                this.result = this.result / operand;
                return;
            case "multiply":
                this.result = this.result * operand;
                return;
            case "subtract":
                this.result = this.result - operand;
                return;
            case "history":
                this.print();
                return;
            case "clear":
                this.result = 0;
                return;
        }
    }

    print() {
        console.log({history: this.history, result: this.result});
    }
}

export default Calc;