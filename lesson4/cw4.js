// 1 Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

min(20, 50, 40)

// 2 Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

max(30, 70, 50)

// 3 Створити функцію яка повертає найбільше число з масиву
let arr = [110, 200, 350, 440, 50];

function maxNum(array) {
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

{
    console.log('Максимальне число в масиві:',maxNum(arr))
}
;
document.write('Максимальне число в масиві:',maxNum(arr));

// 4 Створити функцію яка повертає найменьше число з масиву
function minNum(array) {
    let min = array [0];
    for (const element of array) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

{
    console.log('Мінімальне число в масиві:',minNum(arr))
}
;
document.write('Мінімальне число в масиві:',minNum(arr))

// 5 Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let numbers = [33, 45, 64, 32, 61];

function sum(array) {
    let result = 0;
    for (const element of array) {
        result = result + element
    }
    return result
}

{
    console.log('Сума чисел в масиві:',sum(numbers))
}

// 6 Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function average(array) {
    let result = 0;
    for (const element of array) {
        result += element
    }
    return result / array.length
}

{
    console.log('Середнє арифметичне число в масиві:', average(numbers))
}

// 7 Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function maxMin(ads) {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }}
        console.log('Максимальне число:', max);
        return min;
    }
    document.write('Мінімальне число:'+ maxMin(44, 33, 88, 99, 77, 11));

// 8 Створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
function domRandom (length){
let aar = [];
for (let i=0; i<length; i++){aar.push(Math.random()*100)}
return aar};
document.write('Рандомні числа:',domRandom(7))



// 9 Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function ranRandom (length, limit){
    let ary=[];
    for (let i=0; i<length; i++){ary.push(Math.random()*limit)}
    return ary};
document.write('Лімітовані рандомні числа:',ranRandom(3,5))

// 10 Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let ara=[10,20,30,40,50]
function reverse(array){
    for (let i=ara.length-1, j=0; i>=0; i--, j++)
    { newAra[j]=newAra[i]
    return newAra;}
}


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let arr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }