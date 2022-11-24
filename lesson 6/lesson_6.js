// 1) Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool'
console.log(str.length, str1.length, str2.length);

// 2) Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str.toUpperCase(), str1.toUpperCase(), str2.toUpperCase());

// 3) Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str3 = 'HELLO WORLD';
let str4 = 'LOREM IPSUM';
let str5 = 'JAVASCRIPT IS COOL';
console.log(str3.toLowerCase(), str4.toLowerCase(), str5.toLowerCase());

// 4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strn = ' dirty string   ';
let trim = strn.trim();
console.log(trim);
console.log(`before - ${strn.length}, after - ${trim.length}`);

// 5) Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strng = 'Ревуть воли як ясла повні';
stringToarray = (str) => {
    console.log(str.split())
};
stringToarray(strng)

// 6) Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
mAp = (arr) => (arr
    .map(value => value.toString()))
//     .map(value => String(value))
// .map(value => value + ''));
console.log(mAp(num));

// 7) Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a)
    }
    return arr
};
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(num, 'descending'));

// 8) Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration
));

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration === 5));

// 9) Описати колоду карт

// { cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//   value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'}
let suits = [
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
]
let cards = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker']
let result = [];
for (const suit of suits) {
    for (const cardValue of cards) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardValue,
            color: suit.color
        }
        result.push(card)
    }
}
console.log(result)

// - знайти піковий туз
console.log(result.filter(value => value.cardSuit === 'spade'));
// - всі шістки
console.log(result.filter(value => value.value === 6));
// - всі червоні карти
console.log(result.filter(value => value.color === 'red'));
// - всі буби
console.log(result.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(result.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string')));


// 10) Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = result.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card)
    }
    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
})
console.log(reduce)

