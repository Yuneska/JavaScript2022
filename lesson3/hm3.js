// 1 Cтворити масив з
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers=[23, 32, 21, 12, 31];
let letters=['abc', 'bca','cab','bac','acb'];
let mix=['word', 13, true, false, 'text'];
console.log(numbers);
console.log(letters);
console.log(mix);

// 2 Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль
let empty=[];
empty[0]='index';
empty[1]=true;
empty[2]= 102;
console.log(empty);

// 3 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i=0; i<=9; i++)
{document.write(`<div>довільний текст</div>`)}

for (let i=0; i<10; i++)
{document.write(`<div>${i} довільгий текст з індексом</div>`)}

let x=0;
while (x<20){document.write(`<h1>довільний текст</h1>`)
    x++;
}
let y=0;
while (y<20) {
    document.write(`<h1>довільний текст з індексом ${y}</h1>`)
    y++;
}

// 4 Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
//     вивести тільки рядкові елементи

let num=[1,2,3,4,5,6,7,8,9,0];
for (let i=0;i<num.length; i++){console.log(num[i])}

let words=['ab','ba','bc','cb','ac','ca','cd','dc','ad','da'];
for (let i=0; i<words.length; i++ ){console.log(words[i])}

let mix1=[1,2,3,true,false,true,'a','b','c','d'];
for (let i=0; i<=9;i++){console.log(mix1[i])}

let mix2=['dc','ba','bd','db', false ,true ,false ,9,8,7]
for (let i=0; i<mix2.length; i++)
{if (typeof mix2[i]==="boolean")
    {console.log(mix2[i]);}
}
for (let i=0; i<=9; i++)
{if (typeof mix2[i]==="number"){console.log(mix2[i]);}}

for (let i=0; i<mix2.length; i++)
{if (typeof mix2[i]==="string"){console.log(mix2[i]);}}

// 5 Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let arr=[];
arr[0]='abcd';
arr[1]='dcba';
arr[2]={};
arr[3]=true;
arr[4]=8;
arr[5]=7;
arr[6]=false;
arr[7]=6;
arr[8]=5;
arr[9]='?';
console.log(arr);

for (let i=0; i<=9; i++){console.log(arr[i]);};{document.write(arr[i])}