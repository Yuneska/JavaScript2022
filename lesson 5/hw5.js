// Всі функції повинні бути описані стрілочним типом!!!!
// 1 Створити функцію яка обчислює та повертає площу прямокутника
const area = (a, b) => {
    let s = a * b;
    return s
}
document.write(' Площа прямокутника = ', area(3, 6))

// 2 Створити функцію яка обчислює та повертає площу кола
const circle = (r) => {
    let s = 3.14 * Math.pow(r, 2);
    return Math.round(s)
}
document.write(' Площа кола = ', circle(7))

// 3 Створити функцію яка обчислює та повертає площу циліндру
const cylinder = (r, h) => {
    let s = 2 * 3.14 * r * h;
    return Math.round(s)
}
document.write(' Площа циліндру = ', cylinder(5, 9))

// 4 Створити функцію яка приймає масив та виводить кожен його елемент
let mas = [1, 2, 3, 4, 5];
const mass = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        document.write(array[i])
    }
}
mass(mas)

// 5 Створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const paragraph = (text) => {
    document.write(`<p>${text}</p>`);
    document.write(`<p>${text}</p>`);
    document.write(`<p>${text}</p>`)
}
paragraph('Текст для параграфу')

// 6 Створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий
const list = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
list('Список')

// 7 Створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const list2 = (text, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list2('Список намбер ту', 5)

// 8 Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для
// них список
let arr = ['okten', 343, true, 'web', -23];
const primitive = (array) => {
    for (let i = 0; i < array.length; i++)
        document.write(`<li>${array[i]}</li>`)
}
primitive(arr)

// 9 Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в
// документ. Для кожного об'єкту окремий блок.
let obj = [{id: 1, name: 'Nikita', age: 34}, {id: 2, name: 'Beatris', age: 14}, {id: 3, name: 'Luna', age: 21}];
const object = (array) => {
    for (const element of array)
        document.write(`<div> ${element.id} ${element.name} ${element.age}</div>`)
}
object(obj)
