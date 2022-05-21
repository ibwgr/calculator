import rl from 'readline'
import chalk from 'chalk'

const reader = rl.createInterface({
    input: process.stdin
})

let step = 0
let zahl1
let zahl2
let operator

console.log(chalk.blue('Number 1: '))

reader.on('line', input => {
    step++

    if(step === 1){
        zahl1 = Number(input)
        console.log(chalk.green('Number 2: '))
    }
    if(step === 2){
        zahl2 = Number(input)
        console.log(chalk.yellow('Operator: '))
    }
    if(step === 3){
        operator = input
        let result
        switch(operator){
            case "+":
                result = zahl1 + zahl2
            break;
            case "-":
                result = zahl1 - zahl2
            break;
            case "*":
                result = zahl1 * zahl2
            break;
            case "/":
                result = zahl1 / zahl2
            break;
            default:
                throw new Error('Invalid operator, only + - * / supported')
        }
    
        console.log('Result is:', chalk.red(result))
        reader.close()
    }
})

