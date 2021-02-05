import { Class1 } from './mymodule.mjs'
import { Calculator } from './Calculator.mjs'
var calc=new Calculator();
let num1=parseFloat(`${process.argv[2]}`)
let num2=parseFloat(`${process.argv[4]}`)
let operator=`${process.argv[3]}`
switch(operator) {
    case '+':
        console.log(calc.add(num1,num2))
      // code block
      break;
    case '-':
        console.log(calc.subtract(num1,num2))
      // code block
      break;
    case '*':
        console.log(calc.multiply(num1,num2))
        break;
    case '/':
        console.log(calc.divide(num1,num2))
        break;
    default:
      // code block
  }


