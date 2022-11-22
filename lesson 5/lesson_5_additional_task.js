// Всі функції повинні бути описані стрілочним типом!!!!
// 1) Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
min(22, 333, 1)

// 2) Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
max(44, 53, 24)

// 3) Створити функцію яка повертає найбільше число з масиву.
let array = [23, 45, 67, 89, 98, 76, 54, 32];
const big = (arr) => {
    let max = arr[0];
    for (const item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max
}
console.log(big(array));

// 4) Створити функцію яка повертає найменьше число з масиву.
let small = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item
        }
    }
    return min
}
console.log(small(array))

// 5) Cтворити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let sum = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item
    }
    return sum
}
console.log(sum(array))

// 6) Дано натуральне число n. Виведіть всі числа від 1 до n.
const number = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
number(8)

// 7) Дано два цілих числа A і В . Виведіть всі числа від A до B включно, в порядку зростання,
// якщо A < B, або в порядку спадання в іншому випадку.

const num = (A, B) => {
    if (A < B) {
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }
}
num(9, 3);
num(1, 7);

// 8) Функція приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let changePosition = (num, ...arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            let temp = arr[num];
            arr[num] = arr[num + 1];
            arr[num + 1] = temp;
        }
    }
    return arr
}
console.log(changePosition(0, 9, 8, 0, 4)); // 8, 9, 0, 4
console.log(changePosition(1, 9, 8, 0, 4)); // 9, 0, 8, 4
console.log(changePosition(2, 9, 8, 0, 4)); // 9, 8, 4, 0

// 9) Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let array2 = [0, 0, 1, 0];
const zero = (arr) => {
    let newArr = [];
    let counter = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr[index++] = arr[i]
        } else {
            counter++
        }
    }
    const num = newArr.length;
    for (let i = num; i < num + counter; i++) {
        newArr[i] = 0;
    }
    console.log(newArr)
}
zero(array2)