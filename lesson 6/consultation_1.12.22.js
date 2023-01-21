// 1 Створити функцію, яка приймає масив чисел, сумує значення масиву та повертає його. [1,2,10]-> 13
let array = [1, 2, 10]
const numbers = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];    //x+=y x=x+y; suma=suma+arr[i]  // 0+1; 1+2; 3+10
    }
    return suma
}
console.log(numbers(array));

// 2 Дано натуральне число n. Виведіть всі числа від 1 до n.
let n = 7;
for (let i = 1; i <= n; i++) {
    console.log(i)
}
;

// 3 Дано два цілих числа від А до В.Виведіть всі числа від А до В включно,
// в порядку зростання, якщо А<В або в порядку спадання, якщо навпаки.
let num = (A, B) => {
    let arr = [];
    if (A < B) {
        for (let i = A; i <= B; i++) {
            arr.push(i)
        }
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            arr.push(i)
        }
    }
    console.log(arr);
    return arr
}
num(6, 2);

// 4 Створити масив з рандомних чисел, а потім відсортувати його функцією sort і filter.
let arrNum = [];
for (let i = 0; i < 20; i++) {
    arrNum.push(Math.round(Math.random() * 70))
}
console.log(arrNum.sort((a, b) => (a - b)))

// 5 4356->'4000+300+50+6'

// repeat додає стільки елементів до масиву, скільки ми задаємо
const number=(numbers)=>{
    let res_num=String(numbers);
    let res_arr=[];
    for (let i=0;i<res_num.length;i++){
        if(res_num !=='0'){
            let result=res_num[i]+'0'.repeat(res_num.length-1-i)

            //беремо окремо кожну цифру і додаємо '0' стільки ж скільки і є сама довжина повноцінного числа
            // і з кожний разом на одне число просуваємось далі

            res_arr.push(result);
        }
    }
    return res_arr.join('+');
}
console.log(number(453020))

// while працює доки є true
// unshift додає у початок масиву елемент
// push коли ми додаємо елемент в кінець масиву
// pop видаляє з кінця масиву елемент
// shift видаляє з початку масиву елемент

// parseInt обрізає зайві знаки після коми, якщо в нас неціле число
const nmbr= (numbers)=>{
    const arr=[];
    let index = 0;
    while (numbers){
        let i= numbers%10*10**index++;
        arr.unshift(i);
        numbers/=10;
        numbers=parseInt(numbers);

        if(i===0){
            arr.shift();
        }
    }
    return arr.join('+');
}

console.log(nmbr(47003))