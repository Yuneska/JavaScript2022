// 1 Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Poter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let name = (string, symbol) => {
    replace = string.replace(symbol, ' ')
    return replace
}
console.log(name(n1, '..'));
console.log(name(n2, '---'))
console.log(name(n3, '__'))

// 2 Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (length) => {
    let arr = [];
    for (let i = 0; i <= length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}
let result = random(9)
console.log(result)

// 3 Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let sort1 = result.sort((a, b) => a - b)
console.log(sort1)
let sort2 = result.sort((a, b) => b - a)
console.log(sort2)

let random2 = (length) => {
    let arr = [];
    for (let i = 0; i <= length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr.sort((a, b) => a - b)
}
console.log(random2(3))

// 4 Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = result.filter(number => number % 2 === 0);
console.log(filter)

// 5 Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map = result.map(number => number.toString())
console.log(map)

// 6 Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let num=[11,21,3]
let num = [11, 21, 3]
let sortNums = (direction) => {
    if (direction === 'ascending')
        return num.sort((a, b) => a - b);
    if (direction === 'descending') return num.sort((a, b) => b - a)
}
console.log(sortNums('ascending'))
console.log(sortNums('descending'))

// 7 Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(sort)

// 8 Відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter2 = coursesAndDurationArray.filter(duration => duration.monthDuration > 5);
console.log(filter2)
