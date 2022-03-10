// Всі функції повинні бути описані стрілочним типом!!!!
// 1 Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
        document.write(a);
    } else if (b < a && b < c) {
        console.log(b);
        document.write(b);
    } else {
        console.log(c);
        document.write(c)
    }
};
min(28, 54, 35)

// 2 Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
        document.write(a)
    } else if (b > a && b > c) {
        console.log(b);
        document.write(b)
    } else {
        console.log(c);
        document.write(c)
    }
};
max(65, 65, 98)

// 3 Створити функцію яка повертає найбільше число з масиву
let arr = [32, 76, 47, 29, 90, 54];
const bigNum = (array) => {
    let max = array[0]
    for (const element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}
document.write(` Найбільше число масиву : ${bigNum(arr)}`)

// 4 Створити функцію яка повертає найменьше число з масиву
let arr2 = [98, 677, 54, 56, 34, 24562, 173, 39];
const smallNum = (array) => {
    let min = array[0];
    for (const element of array) {
        if (element < min) {
            min = element
        }
    }
    return min
}
document.write(` Найменше число масиву : ${smallNum(arr2)}`)

// 5 Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let arrNum = [5, 4, 3, 2, 1];
const sumNum = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element
    }
    return sum
}
document.write(sumNum(arrNum))

// 6 Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const average = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element
    }
    return sum / array.length
}
document.write(average(arrNum))

// 7 Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
const maxMin = (...arguments) => {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element
        }
        if (element < min) {
            min = element
        }
    }
    console.log("Найбільше число :", max);
    return min
}
document.write(' Найменше число : ' + maxMin(3, 5, 44, 6, 2, 45, 23, -354))

// 8 Створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
const random = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr
}
console.log('Рандомні числа : ', random(5))

// 9 Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
const random2 = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit))
    }
    return arr
}
document.write(random2(3, 50))

// 10 Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const reverse = (array) => {
    let arrRev = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        arrRev[j] = array[i]
    }
    return arrRev
}
console.log('Реверсивний масив : ', reverse([8, 7, 6, 5]))