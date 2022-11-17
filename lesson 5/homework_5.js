
// 1) Cтворити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.
function area (a,b){
    let s=a*b;
    return s;
}
console.log(area(2,5))
document.write('Площа прямокутника =',area(2,5));

// 2) Cтворити функцію яка обчислює та повертає площу кола з радіусом r.
function circle(r){
    let p=3.14;
    let s=p*Math.pow(r,2);
    return Math.round(s)
}
console.log(circle(5))
document.write('Площа кола =', circle(3))

// 3) Cтворити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r.
function cylinder (h,r){
    let s=2*3.14*h*r;
    return Math.round(s);
}
console.log(cylinder(3,4));
document.write('Площа циліндра =',cylinder(4,3))

// 4) Cтворити функцію яка приймає масив та виводить кожен його елемент.
let mass=[1,22,333,4444];
function array(arr){
    for(let i=0; i<arr.length; i++)
    console.log(arr[i])
}
array(mass)

// 5) Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент.
function paragraph(arguments){
    document.write(`<p>${arguments}</p>`)
}
paragraph('Параграф з текстом')

// 6) Cтворити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
let list=(argument)=> {
    document.write(`<ul>`);
    document.write(`<li>${argument}</li>`);
    document.write(`<li>${argument}</li>`);
    document.write(`<li>${argument}</li>`);
    document.write(`</ul>`)
}
list('Однаковий аргумент')

// 7) Cтворити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
let list2=(argument,counter)=> {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`)
}
list2('Аргумент однаковий', 3)

// 8) Cтворити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список.
let array2=[1,22,true,'okten',333,false]
let masyv=(arr)=>{
    for(let i=0; i<arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
}

masyv(array2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13