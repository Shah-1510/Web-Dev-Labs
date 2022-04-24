const operator = prompt('Enter operator (either +, -, /,* , ++ , -- , %): ');


const number1 = parseFloat(prompt('Please Enter First number: '));
const number2 = parseFloat(prompt('Please Enter Second number: '));

let result;

if (operator == '+') {  
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2; 
}
else if (operator =='/'){
    result = number1 / number2;
}
else if (operator == '++'){
    result= number1+number2+1;
}
else if (operator == '--'){
    result= number1-number2-1;
}
else{
    result= number1/number2*100;
}
alert(`${number1} ${operator} ${number2} = ${result}`);