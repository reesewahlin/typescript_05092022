"use strict";
// export type Command2 = 'add' | 'subtract' |'multiply' |'divide' | 'clear' | 'history';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommand = void 0;
var supportedCommands = ["add", "subtract", "multiply", "divide", "clear", "history"];
function isCommand(x) {
    return supportedCommands.includes(x);
}
exports.isCommand = isCommand;
var Calc = /** @class */ (function () {
    function Calc() {
        this.result = 0;
        this.history = [];
        this.lastId = 0;
    }
    Calc.prototype.compute = function (command, operand) {
        this.history.push({
            command: command,
            operand: operand,
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
    };
    Calc.prototype.print = function () {
        console.log({ history: this.history, result: this.result });
    };
    return Calc;
}());
exports.default = Calc;
