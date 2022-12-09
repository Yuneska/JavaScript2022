// function foo(obj) { //два блоки ініціалізації
//     try {
//         console.log(obj.name);// спроба щось зробити\ звертаємось до неіснуючої характеристики об'єкта
//     } catch (e) {           //якщо помилка, то ця помилка хапається блоком catch
//         console.log(e)
//     }
//     console.log('end')
// };
// // це назив error handling/обробка помилок
// foo();
//
// function divider(a,b){
//     if(b===0){
//       throw new Error('ououou B is zero') //згенеровуємо помилку
//           //викидуємо еррор при певних обставинах
//     }
//     //у js, якщо щось ділити на 0, то буде infinity
//     return a/b;
// }
// // це обробка помилок\це як іфи, але для помилок
// try{
//     divider(10,5)
// }catch (e){
//     console.log(e);
//     console.log(divider(10,2))
// } finally {
//     console.log(',kjr zrbddhjlkf') //фіналі блок який виконається так чи інакше
// }
// // catch  спрацює, тільки, якщо в середині try буде згенерована помилка\ якщо помилка у try взривається, то ми її стараємось зловити catch
//

//
// let user={
//     name:'asdasd'
//     }
// ;
// console.log(user?.name);
// console.log(user?.wife?.age);
// //?-одноокий Елвіс-оператор опціональної послідовності\\ігнорує наступну характеристику name і не викликає його
// //це можливість уникнути помилки, якщо у нас є якийсь невідповідний тип даних
//
// let name='vasya';
// let age= 34;
// let user1={
//     name: name,
//     age: age
// }
// //якщо характеристика мого об'єкту має таку саму назву, як змінна, з якої я беру значення для цієї характеристики, то я можу написати так:
// //діє тільки, якщо у нас однакові\ідентичні назви!!! Різна варіація назв не працює!!!
// let user2={
//     name,
//     age,
// }


let user3 = {
    name: 'kokos',
    age: 31,
    wife: {
        name: 'olya',
        age: 28
    },
    skills: ['html', 'js']
}

// //Деструктуризація - розбираємо об'єкт на складові частини
// let {age, name}=user3 // воно зробить нам окремі змінні let age, let name
// //витягує age, name кожен в свою комірку
// console.log(age, name); // 31, 'kokos' функції також можемо витягувати, бо функції-це об'єкти

let {name, age, wife, wife: {age: wAge, name: wName}} = user3; //витягуємо інформацію з wife

console.log(name, age, wife); //name, age належать user3, wife зараз не буде видно,бо ми її розклали\\ хіба треба буде прописати wife окремо
console.log(wName, wAge); //з wife маю витягнути саме name та age і тоді ці змінні перейменувати

let user4 = user3; //один і той самий об'єкт\\силочні типи даних та примітиви
let user5 = {...user3}; //спред оператор (виглядає, як рест аргумент у функції, коли передаємо масив у аргумент) - робимо новий об'єкт і всі характеристики беремо з об'єкту user3
// {name:user.name, age:user.age} -  неглибоке клонування об'єкту
let user6 = {...user3, status: true};
console.log(user6); //ми взяли дані/характеристики з попереднього об'єкту(user3) скопіювали їх у user6 і додали ще нові status

// хочемо змінювати якусь характеристику:
let user7 = {...user3, status: false, name: 'abrikos'}
console.log(user7); // змінили\замінили один параметр

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// Map-віддає масив, але в цьому масиві можуть бути об'єкти з силочними типами даних, можуть бути пов'язані з первиннним масивом
// перший спосіб
users.map((value, index) => ({
    name: value.name,
    age: value.age,
    status: value.status,
    id: index + 1,
}));

//другий спосіб
console.log(users.map((value, index) => ({...value, id: index + 1})));

let user8 = {...user3}; //shallow(неглибокий) копія\ як обгортка, панцир, поверхнева копія

// deep copy:
let stringify = JSON.stringify(user3); //перетворюємо об'єкт в стрінгу
console.log(stringify); // стрінговий формат/ java script object notation (JSON)/ тепер це вже абсолютно новий об'єкт, який не пов'язаний з попереднім


// конвертуємо зі стрінги в об'єкт:
let parse = JSON.parse(stringify);
console.log(parse); //отримали об'єкт / тепер parse та user3 між собою ніяк не пов'язані

function copyCentr(obj) {
    let s = JSON.stringify(obj);
    let p = JSON.parse(obj);
    return p; // або скорочено  return JSON.parse(JSON.stringify(obj))
}

// стрілочна версія:
const copy = (obj) => JSON.parse(JSON.stringify(obj));












let usr={
    name: ' kokos',
    age: 23
}
usr.age='dog';

//yield - багаторазовий return
//функція , яка генерує об'єкти:

//Замикання - коли у межах функції існує внутрішній об'єкт або функція, яку я повертаю або об'єкт з функцією, яких я повертаю  має посилання на цей внутрішній об'єкт
// тобто посилання на об'єкт зберігається і сам об'єкт також зберігається
//можемо робити інкапсуляцію
function userBuilder(name, age){
  let user={name, age};   //лексичне середовище
return {
    setAge: function (newAge){                  //ця функція бачить user
        if (typeof newAge === 'string'){
            throw new Error ('newAge must be a number type')
        }else{
            user.age =newAge; // setAge замкнувся на user  // я звертаюся до поля age і впроваджую йому значення newAge,яке задаю у функцію
        }

    },
    user: function (){
        return {...user} // повертає нам функцію, яка повертає скопійований об'єкт user, щоб ми могли через посилання ним маніпулювати
    },
};
}

let builder=userBuilder('bodya', 12); //об'єкт буде локальний\буде знаходитися в межах блоку функції, ініціалізації
console.log(builder.setAge(100));
console.log(builder.user()); //об'єкт зі зміненою параметрою

// просто повертаємо об'єкт з функціями, ця функція(setAge) зав'язана на внутрішньому об'єкті(user) функції (userBuilder)
//Замикання-це можливість об'єкта тримати посилання на внутрішній об'єкт зовнішньої функції.