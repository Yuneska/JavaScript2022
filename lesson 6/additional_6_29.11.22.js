let str = 'qqq www eee';
let includes = str.includes('qqq');
console.log(includes);
//indexOf-шукає тільки один символ, дає нам знати індекс заданого символу.
//Але воно нам знайде тільки один\перший символ серед всіх інших, які ми шукаємо. Шукає з початку.
//lastIndexOf-знаходить індекс останнього символу серед всіх інших. Шукає з кінця.

// 1 Напишіть функцію cutString(str, n), яка ділить стрінгу на підстрінги, яка складається із n символів.
// document.writeln(cutString('насолода',2)) // [на,со,ло,да]
const cutString = (str, n) => {      //n-кількість букв\символів в одній стрінзі
    const arr = [];
    for (let i = 0; i <= str.length; i += n) { // i+=n - крок з i по n, збільшення //i+n=n
        //0+2=2
        //2+2=4
        //4+2=6
        //6+2=8

        arr.push(str.slice(i, n + i))    //від i до n+i НЕВКЛЮЧНО! (від початку і до кінця стрінги)
        // i=0,n=2+0=2 зрізаємо в діапазоні від 0 до 2
        // i=2, n=2+2=4 зрізаємо в діапазоні від 2 до4;
        // i=4, n=2+4=6 зрізаємо в діапазоні від 4 до 6;
        // i=6, n=2+6=8 зрізаємо в діапазоні від 6 до 8 НЕВКЛЮЧНО!
    }
    return arr;
}
let cutString1 = cutString('насолода', 2);
console.log(cutString1)

// 2 Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
// let str = 'Кожен мисливець бажає знати';
// document.writeln(delete_characters(str, 6)); // Кожен
let str1 = 'Кожен мисливець бажає знати';
const delete_characters = (str, length) => {
    return str.slice(0, length)
}
console.log(delete_characters(str1, 6))

// 3 Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = 'HTML JavaScript PHP'
const insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
console.log(insert_dash(str2));

// 4 Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const toUp = (str) => str[0].toUpperCase() + str.slice(1); //Slice-повертає поверхневу копію частини заданого масиву\стрічки від 1 і якщо другий аргумент не вказаний, то аж до кінця або можна від 1 до 3
console.log(toUp('web web web'))

// 5 Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let name = (str, symbol) => str.replace(symbol, ' ');
console.log(name(n1, '..'));
console.log(name(n2, '---'));
console.log(name(n3, '__'));

//Trim-видаляє пробіли на початку та в кінці рядка
const norm = (str) => {
    let string = str.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') || (value >= '0' && value <= 9) ? value : ' ').join('').trim()
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < arr.length; i++) {
        while (string.includes('  ') || string.includes(arr[i])) {
            string = string.replace('   ', '').replace(arr[i], '')
        }
    }
    return string;
}
console.log(norm('!@#$$%^&**(()_+.. Pott55555er   '));

let normalizes = (str) => {
    let newStr = str.replace(/[-_.]/g, ' ');
    for (let i = 0; i < newStr.length; i++) {
        return newStr
    }
}
console.log(normalizes(n2))

// 6 Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const random=(length)=>{
    let arr=[];
    for(let i=0; i<=length; i++){
        arr.push(Math.round(Math.random()*100))
    }
    return arr
}
console.log(random(5));
//Math.round-завкруглює до більшого
//Math.floor-завкруглює до меншого

// 7 Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort.
let sort1=(arr)=>arr.sort((a,b)=>a-b); //a-b за зростання, від більшого до меншого
console.log(sort1(random(4)));
let sort2=(arr)=>arr.sort((a,b)=> b-a);
console.log(sort2(random(3)));

// 8 Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let filter=(arr)=> arr.filter(value=>value%2 === 0)
console.log(filter(random(4)))

// 9 Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize=(str)=>str.split(' ').map(word=> word[0].toUpperCase()+ value.slice(1)).join(' ');
console.log(capitalize(str1));

// 10 Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// дані до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.







// 11 Є масив let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
