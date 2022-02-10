'use strict';

function sum(arg1, arg2) {
    return arg1 + arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}

function difference(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
    }
}

//в зависимости от операции соответствующий символ и значения с которым провести вычисление

console.log(mathOperation(3, 4, '+')); 
