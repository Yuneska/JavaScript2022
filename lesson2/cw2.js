// // 1 Користувач вводить або має два числа.
// //     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.
let n1 = +prompt('Введіть перше число');
let n2 = +prompt('Введіть друге число');
{
    console.log(Math.max(n1, n2));
}
if (n1 === n2) {
    console.log('Числа рівні між собою')
}

// // 2 У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// // Користувач вводить номер квартири просто в змінні або через prompt('') .
// //     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat = +prompt('Введіть номер квартири')
if (flat >= 1 && flat <= 20) {
    console.log('Квартира у першому підїзді')
} else if (flat >= 21 && flat <= 48) {
    console.log('Квартира у другому підїзді')
} else if (flat >= 49 && flat <= 90) {
    console.log('Квартира у третьому підїзді')
} else {
    console.log('В підїздах немає заданої квартири')
}

// 3 Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО.
let number = +prompt('Введіть число');
if (number === 10) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}

(number === 10) ? console.log('ВІРНО') : console.log('НЕВІРНО')

// // 4 Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// //     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення, що ми
// // йдемо ВЧИТИСЯ. Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = +prompt('Задайте температуру!');
if (temperature >= +10 && temperature <= +22) {
    alert('ВЧИТИСЯ')
} else {
    alert('ОНЛАЙН')
}

(temperature >= +10 && temperature <= +22) ? console.log('ВЧИТИСЯ') : console.log('ОНЛАЙН')

// // 5 За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// //     І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д )
// //     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let num = +prompt('Введіть число від 1 до 5')
switch (num) {
    case num = 1:
        alert('Ви виграли авто');
        break;
    case num = 2:
        alert('Ви виграли телефон');
        break;
    case num = 3:
        alert('Ви виграли навушники');
        break;
    case num = 4:
        alert('Ви виграли ноутбук');
        break;
    case num = 5:
        alert('Ви виграли телевізор');
        break;
    default:
        alert('Повезе в наступний раз!')
}