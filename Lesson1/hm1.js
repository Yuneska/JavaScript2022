// 1 Створити змінні. Присвоїти кожному
// з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let t = true;
let f = false;

// 2 Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(t);
console.log(f);
alert(a);
alert(b);
alert(c);
alert(d);
alert(n1);
alert(n2);
alert(n3);
alert(n4);
alert(n5);
alert(n6);
alert(n7);
alert(t);
alert(f);
document.write(`<div>${a}</div>`);
document.write(`<div>${b}</div>`);
document.write(`<div>${c}</div>`);
document.write(`<div>${d}</div>`);
document.write('<div>' + n1 + '</div>');
document.write('<div>' + n2 + '</div>');
document.write('<div>' + n3 + '</div>');
document.write('<div>' + n4 + '</div>');
document.write('<div>' + n5 + '</div>');
document.write('<div>' + n6 + '</div>');
document.write('<div>' + n7 + '</div>');
document.write(`<div>${t}</div>`);
document.write(`<div>${f}</div>`);

// 3 Переприсвоїти кожній змінній з завдання значення на довільне.
a = 'world';
b = 'moon';
c = 'stars';
d = 'sky';
n1 = 5;
n2 = 6;
n3 = 7;
n4 = 8;
n5 = 4;
n6 = 3;
n7 = 2;
t = 'trrr';
f = 'flll';

// 4 Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(t);
console.log(f);
console.log(a);
alert(a);
alert(b);
alert(c);
alert(d);
alert(n1);
alert(n2);
alert(n3);
alert(n4);
alert(n5);
alert(n6)
alert(n7);
alert(t);
alert(f);
document.write('<div>' + a + '</div>');
document.write('<div>' + b + '</div>');
document.write('<div>' + c + '</div>');
document.write('<div>' + d + '</div>');
document.write(`<div>${n1}</div>`);
document.write(`<div>${n2}</div>`);
document.write(`<div>${n3}</div>`);
document.write(`<div>${n4}</div>`);
document.write(`<div>${n5}</div>`);
document.write(`<div>${n6}</div>`);
document.write(`<div>${n7}</div>`);
document.write('<div>' + t + '</div>');
document.write('<div>' + f + '</div>')

// 5  Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Inesa';
let middleName = 'Vovchanska';
let lastName = 'Stepanivna';
let person = firstName + middleName + lastName;
console.log(person);

// 6 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let name = prompt('Ваше імя?', firstName);
let fname = prompt('Ваше прізвище?', lastName);
let age = prompt('Ваш вік?', '23');

// 7 Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert(`Вітаю ${name},${fname}. Тобі ${age} років.`)

// 8 - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
a = 100;
b = '100';
c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 9 - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');

// 10 Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");

