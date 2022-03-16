// 1 Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length)
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length)

// 2 Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up1 = str1.toUpperCase();
console.log(up1);
let up2 = str2.toUpperCase();
console.log(up2);
let up3 = str3.toUpperCase();
console.log(up3)

// 3 Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let low1 = str1.toLowerCase();
console.log(low1);
let low2 = str2.toLowerCase();
console.log(low2);
let low3 = str3.toLowerCase();
console.log(low3)

// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let replace = str4.replaceAll(' ', '');
console.log(replace)
let trim = str4.trim();
console.log(trim)

// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Кожен', 'мисливець', 'бажає', 'знати']
let str = 'Кожен мисливець бажає знати ';
let split = str.split(' ');
console.log(split);
document.write(split)

let stringToarray = (str) => {
    let arr = str.split(' ');
    return arr
}
let arr = stringToarray(str);
console.log(arr);
document.write(arr)

// 6 Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Кожен мисливець бажає знати';
// document.writeln(delete_characters(str, 7)); // Кожен
let delete_characters = (str, length) => {
    return str.substring(0, 6)
}
console.log(delete_characters(str));
document.write(delete_characters(str));

// 7 Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let srt = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.replaceAll(' ', '-') && str.toUpperCase(str)
}
console.log(insert_dash(srt))

// 8 Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.
let str5 = 'web web web'
let uPPer = (str) => {
    if (!str)
        return str;
    return str[0].toUpperCase()+ str.slice(1)
}
console.log(uPPer(str5))
document.write(uPPer(str5))

// 9 Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize=(str)=> {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize(str3))
document.write(capitalize(str3))
