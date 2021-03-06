'use strict';

let a = 1, b = 1, c, d;

/*префиксный инкремент присваивает переменной a значение 2
затем возвращает ее значение
с присваивает 2*/
c = ++a;
console.log(c); // ответ: 2 (a=2 b=1 c=2)

/*постфиксный инкремент сначала возвращает значение b равное 1
затем переменная d присваивает значение b, и становится равным 1
затем b присваивает значение 2*/
d = b++;
console.log(d); //ответ: 1 (a=2 b=2 c=2 d=1)

/*префиксный инкремент присваивает переменной a значение 3 
затем возвращает ее значение
происходит сложение 2+3
с присваивает 5*/
c = 2 + ++a;
console.log(c);; //ответ: 5 (a=3 b=2 c=5 d=1)

/*постфиксный инкремент сначала возвращает значение b равное 2
затем переменная d присваивает значение 2 + b (4)
затем b присваивает значение 3*/
d = 2 + b++;
console.log(d);; //ответ: 4 (a=3 b=3 c=5 d=4)
console.log(a);; //3
console.log(b);; //3