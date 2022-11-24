// let str='hello okten';
// console.log(str[0]);
// let toUpperCase=str.toUpperCase();
// console.log(toUpperCase);
// console.log(toUpperCase.toLowerCase());
// console.log(str.startsWith('hello'));
// console.log(str.endsWith('en'));
//
// let substring=str.substring(0,7);
// console.log(substring);
//
// let indexOfE=str.indexOf('e');
// console.log(indexOfE);
// let indexOfT=str.indexOf('t');
// console.log(indexOfT);
// console.log(str.substring(indexOfE, indexOfT));
// console.log(str.charAt(7));
//
// let phone = '(067)292-88-92';
// let replaceAll=phone.replaceAll('(', '');
// console.log(replaceAll);
// console.log(phone.replaceAll(')', '')
//     .replaceAll('-', '')
//     .replaceAll('0','1')
// )
// phone.replaceAll(/[)(-+)]/g,'') // global change /[]/g
//
// let obj='name:vasya,age:31';
// let split=obj.split(',')
// console.log(split);
// let tupleName= split[0];
// let nameValue=tupleName.split(':')
// console.log(nameValue[0]);
// let tupleAge=split[1];
//
// Array.isArray([]); //true масив
// Array.isArray({}); //false бо це об'єкт
// let arr=[];
// arr[arr.length]='asdqwe0'; // додає в кінець масиву;
// console.log(arr.push('asdqwe1')); // додає щось в кінець, повертає ця функціянову довжину(нову к-сть елементів)
// console.log(arr.push('asdqwe2'));
// console.log(arr.push('asdqwe3'));
// console.log(arr.push('asdqwe4'));
// console.log(arr);
//
// console.log(arr.pop());; // попшмпейн вистрілюємо\видаляємо останній об'єкт (з кінця). Повертає той елемент, який видалила
// console.log(arr); //отримуємо масив без останнього елемента
//
// console.log(arr.shift()); //видаляє елемент з початку, повертає той елемент, який видалила
// console.log(arr);
//
// arr.unshift('fedhjkfdjh'); //додає на початок
// console.log(arr);
//
// let join=arr.join(':'); // з'єднує елементи в одну єдину стрінгу комами, в даному випадку з'єднає за допом двох крапок ':'
// console.log(join);
//
// let nums=[1,2,3,4];
// let concat=arr.concat(nums); //з'єднує два масива між собою, повертає новий масив
// console.log(concat);

// let users=[{id: 1, name:'Nikita', surname:'Moluboga'},
// {id: 2, name: 'Alla', surname: 'Koalla'},
// {id:3, name:'Inesa', surname: 'Stuardesa'},
// {id:4, name: 'Nelia', surname:'Vovch'}]
//
// console.log(users.splice(0, 2)); //видаляє об'єкти, 0-з якого елемента видаляти; 2- скільки елементів видаляти
// console.log(users)
//
// users.splice(1,1,'!!!'); // з 0 елем починаю видаляти 2 елемента і за міняю їх на '!!!'
// console.log(users);

// let arr=[11,22,33,44,55];
// let numbers=arr.reverse(); //повертає реверснутий масив
// console.log(numbers);
// arr.includes(11); // чи містить 11\ true - містить
//
// let str=' фів ';
// console.log(str.length); // довжина стрінги 5 символів
//
// let s=str.trim();
// console.log(s);
// console.log(s.length); //довжина =3, trim обрізає тільки пробіли, дивиться і на початок,і на кінець


// ФУНКЦІЇ ЯКІ ПРИЙМАЮТЬ ІНШІ ФУНКЦІЇ

let user = [{name: 'nikita', age: 25},
    {name: 'oleksandr', age: 36},
    {name: 'yura', age: 26},
    {name: 'oleksiy', age: 14},
    {name: 'vasya', age: 47}];

// function whatiwanttodowiththisobject(item){
//     console.log(item)
// } //описана фція
//
// user.forEach(whatiwanttodowiththisobject);// в якості аргумента приймає функцію, функція є об'єктом. Передаємо сюди функцію.
// // forEach - вганяє в цикл масив та пропрацьовує задану функцію з кожним елм масиву. Заміна ітерації.
//
// // або
// user.forEach(function whatiwanttodowiththisobject(item){
//     console.log(item)});
//  //або
// user.forEach((item)=> console.log(item) ); //стрілочна фція, беремо кожен елем з масиву та виводимо його

// let filter = user.filter(function (user) {
//     return user.age > 30
// });
// //в середину приймає callback фцію. filter візьме внутрішню фцію(callback) і застосує послідовно його до кожного елем масиву
// // CALLBACK - фунція, яку ми передаємо на вхід. Функція,яка знаходиться у функції, тому що викликається під капотомю
// // Filter Callback фція може використовувати максимум три аргументи:
// // 1) user-це функція 2) index - індекс елемента,який я ітерую 3)arr - масив до якого належить елемент.
// //Filter - повертає нам булове значення true/false.
//
// console.log(filter); // якщо воно задовільнить умову, то фільтер запхає його у новий масив
// let filter2 = user.filter((user) => user.age > 30 && user.name === 'vasya');
//
// let map = user.map(function (user) {
//     let newUser = {age: user.age}
//     return newUser
// });//з'єднання однієї точки з іншою. Приймає callback функцію. Повертає масив з об'єктами, які можна буде змінити.
// // Map - дозволяє об'єкти перевести з однієї моделі даних на іншу. Змапувати старий тип даних на новий тип даних.
//
// console.log(map); //отримаємо новий масив з полями тільки age.
//
// user
//     .map((user, index) => ({id: index + 1, age: user.age}))//index+1,бо індекс починає рахувати з 0.
//     .filter(value => value.id % 2 === 0)//можемо добавляти й інші
//     .forEach(value => console.log(value));
// // Chain-ланцюг. Конструкція ланцюг.
//
// let sort= user.sort(function (a, b) {
//     return a.name.length - b.name.length
// } )
// //Sort - приймає колбек фцію. Має два аргументи, бере перший та сусідній (завжди бере парами), порівнює їх, якщо треба, то міняє місцями і таким чинм сортує.
// console.log(sort); //Від менших до більших імен.
//
// console.log(user.sort(function (a,b){
//     if(a.name<b.name){
//         return -1 //якщо об'єкт менший ніж інший, то він легший і його потрібно піднятию Воно легше на якесь від'ємне ззначення
//     } // Головне, щоб було додатнє, або від'ємне значення.(Байдуже яке число).
//     if (a.name>b.name){
//         return 1 // якщо об'єкт більший ніж інший, то він важчий і його потрібно занурити.Та на скільки воно важче наякесь додатнє значення
//     } // Якщо додатнє значення, то об'єкт пірнає. Якщо недодатнє знач, то об'єкт залишається на своєму місці.
//     if(a.name===b.name){
//         return 0
//     }
// })); // Масив відсортований по алфавіту.
// // >, < - це символ під своїм капотомоприділяє вагу стрінгів.

let reduce =user.reduce((accumulator, user)=>{
    accumulator.names.push(user.name);
    accumulator.ages.push(user.age);
    return accumulator
}, {names:[], ages:[ ]});
// Reduce - зменшувач\Перетворювач.В один об'єкт розбираємо масив по складовим частинам, загалом пофасувати.
// Повертаємо аккумулятор, але його при цьому змінюємою
// Всі імена, всі роки окремо. Ми мали масив і отримали один єдиний об'єкт. Тобто зменшили. Насправді reduce - це перетворювач.
console.log(reduce)