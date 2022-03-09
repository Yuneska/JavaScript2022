// 1 Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    let s = a * b;
    return s;
}

area(33, 55)
console.log(area(33, 55));
document.write('Площа прямокутника = ', area(33, 55));

// 2 Створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    let s = 3.14 * (Math.pow(r, 2));
    return s;
}

console.log(circle(5));
document.write('Площина кола = ', circle(5));

// 3 Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    let s = 2 * 3.14 * h * r;
    return s;
}

console.log(cylinder(4, 7));
document.write('Площина циліндру = ', cylinder(4, 7))

// 4 Створити функцію яка приймає масив та виводить кожен його елемент
let arr = [34, 65, 87, 97];

function masiv(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        document.write(arr[i])
    }
}

masiv(arr)

// 5 Створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(argument) {
    document.write(`<p>${argument} </p>`);
    document.write(`<p>${argument}</p>`)
}

paragraph('Текст')

function parag (argument) {
    for (let i = 0; i <= 5; i++) {
        document.write(`<p>${i} ${argument}</p>`)
    }
}

parag('Текст2 текст2')

// 6 Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(arg) {
    document.write(`<ul>`)
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`)
}

list('текст зі списку')

// 7 Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(arg, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li> ${arg}</li>`)
    }
    document.write(`</ul>`)
}

list2(`аргументований текст`, 3)

// 8 Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них
// список
let array = ['okten', true, 10, 'web', 'peace', 55];

function aRr(arg) {
    document.write(`<ul>`)
    for (let i = 0; i < arg.length; i++)
        document.write(`<li>${arg[i]}</li>`)
    document.write(`</ul>`)
}

aRr(array)


// 9 Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в
// документ. Для кожного об'єкту окремий блок.
let array2 = [{id: 1, name: 'Nikita', age: 23}, {id: 2, name: 'Luna', age: 27},
    {id: 3, name: 'Beatris', age: 14}];

function object(arg) {
    for (const element of arg)
        document.write(`<div>${element.id} ${element.name}: ${element.age}</div>`)
}

object(array2)