'use strict';

let a_2 = 2; //присваиваем а значение 2
let x_2 = 1 + (a_2 *= 2); //выполняем действие в скобках, просиходит умножение с последующим присвоением результата, получаем 4, складывам с 1
console.log(a_2); //в примере выше в а записано 4
console.log(x_2); //результат 5