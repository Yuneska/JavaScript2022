// 1) Cтворити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.
let area = (a, b) => a * b;
console.log(area(2, 5))
document.write('Площа прямокутника =', area(2, 5));

// 2) Cтворити функцію яка обчислює та повертає площу кола з радіусом r.
function circle(r) {
    let p = 3.14;
    let s = p * Math.pow(r, 2);
    return Math.round(s)
}

console.log(circle(5))
document.write('Площа кола =', circle(3));

let circle1 = (r) => Math.PI * Math.pow(r, 2);

console.log(circle1(3));
document.write('Площа кола = ', Math.round(circle1(3)))

// 3) Cтворити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r.
function cylinder(h, r) {
    let s = 2 * 3.14 * h * r;
    return Math.round(s);
}

console.log(cylinder(3, 4));
document.write('Площа циліндра =', cylinder(4, 3))


let cilinder = (h, r) => 2 * Math.PI * h * r;

console.log(cilinder(2, 3));
document.write('Площа циліндра = ', Math.round(cilinder(2, 3)));

// 4) Cтворити функцію яка приймає масив та виводить кожен його елемент.
let mass = [1, 22, 333, 4444];

function array(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])
}

array(mass)


function array1(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

array1(mass)

// 5) Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент.
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('Параграф з текстом')

// 6) Cтворити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
let list = (text) => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`)
}
list('Однаковий аргумент')

// 7) Cтворити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
let list2 = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list2('Аргумент однаковий', 3)

// 8) Cтворити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список.
let array2 = [1, 22, true, 'okten', 333, false]
let masyv1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
}

masyv1(array2)

// 9) Cтворити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let array3 = [{id: 1, name: 'Nikita', age: 34}, {id: 2, name: 'Beatris', age: 14}, {id: 3, name: 'Luna', age: 21}];

let masyv2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id}) ${arr[i].name} - ${arr[i].age} </div>`)
    }
}
masyv2(array3)

// 10) Cтворити функцію яка повертає найменьше число з масиву.
let numbers = [32, 1, 22, 333, 4444];
let minNum = (arr) => {
    let min = arr[0];
    for (const element of arr) {
        if (element < min) {
            min = element
        }
    }
    return min;
}

minNum(numbers)

// 11) Cтворити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let suma = (arr) => {
    let sum = 0;
    for (const element of arr) {
        sum += element //sum=sum+element
    }
    return sum
}

console.log(suma(numbers))


// 12)
let i=0;
let n=0;
while (i<5){
    i++;    //0+1=1; 1+1=2; 2+1=3; 3+1=4; 5(бо до 5, далі не плюсуємо)
    if (i===3){
        continue; //3 пропускаємо (continue пропускаємо дію, яку описали)
    }
    n+=i;   //0+1=1; 1+2=3; 3+4=7; 7+5=12
    console.log(n);
}