// 1) Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let array = [65, 78, 44];

function minNum(arr) {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }
    console.log(min)
}

minNum(array);

// 2) Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
maxNum(array);

// 3) Створити функцію яка повертає найбільше число з масиву.
let array1 = [55, 43, 33, 23]
let max = (arr) => {
    let max = arr[0];
    for (const item of arr) {
        if (max < item) {
            max = item;
        }
    }
    return (max);
}
console.log(max(array1));

// 4) Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let serAr = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    let ser = sum / arr.length;
    return Math.round(ser)
}
console.log(serAr(array1));

// 5) Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

let minMax = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (const item of arr) {
        if (min > item) {
            min = item;
        }
        if (max < item) {
            max = item;
        }
    }
    console.log(max);
    return min;
}

console.log(minMax(0, 1, 22, 333, 4444, 333, 22, 1, 0));


// 6) Створити функцію яка заповнює масив рандомними числами.
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let array0 = []
let random1 = (arr) => {
    for (let i = 0; i < 5; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    console.log(arr)
}

random1(array0)

// 7) Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let random2 = (arr, limit) => {
    for (let i = 0; i < 5; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    console.log(arr)
}

random2(array0, 50)

// 8) Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array2 = [1, 2, 3];
let reverse = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1, j = 0; i >= 0;) {
        newArray[j++] = arr[i--];
    }
    return newArray
}
console.log(reverse(array2));

// 9) Створити функцію, яка якщо приймає один аргумент, просто виводить його,
// якщо два аргументи - складає або конкатенує їх між собою.
let foo = (...arguments) => arguments.length === 2 ? sum = arguments[0] + arguments[1] : arguments[0]; // ?-у випадку,якщо так   :-у випадку, якщо ні

console.log(foo(1, 5));
console.log(foo(4))

// 10) Створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив. EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
let ar1 = [1, 2, 3, 4];
let ar2 = [2, 3, 4, 5];

let together = (arr1, arr2) => {
let newArray=[];
newArray[j]=arr1[i]+arr2[i];
    for (let i=0, j=0;i<arr1.length, i<arr2.length, j<newArray.length; i++, j++;){

    }
}


// 11) Створити функцію яка приймає масив будь-яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let massiv=[{name:'Dima', age: 13}, {model: 'Camry'}];
let keys=(arr)=>{
   for (let i=0; i<arr.length; i++){
        return arr[i].keys
    }
}



// 12) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let object=(arr)=> {
    for(const item of arr){
        let obj=[item.name; item.age, item.model];
        return obj;
    }
}