// Функція в js - це об'єкт.
// Функції-конструктори - це функція, яка породжує об'єкти.
function User(name, age, skills, wife) {
    this.name = name;   //this собою являє майбутній об'єкт, який буде собою породжений.
    this.age = age;
    this.skills = skills;
    this.wife = wife;

// This зсилається на той об'єкт який буде в майбутньому створений.
// This майбутній об'єкт. name, age , skills, wife - це те, що в нього буде.

    this.greeting = function (msg) { console.log(`${msg} my name is ${this.name}`)}
//this завжди зсилається на об'єкт, працюємо з об'єктом який вже виділений, в якого існує вже свій контекст і т д
// стрілочні функції втрачають контекст this, коли ми працюємо як function expression (це коли ми спочатку ззовні створюємо змінну, а потім в неї передаю функцію
//стрілочна функція замикає об'єкт тільки у нашому контексті.
// (Всередині функції-конструкторів не бажано використовувати стрілочні фукнції!!!)
}

let user1 = new User('vasya', 31, ['js', 'java', 'c++'], {name: 'anna', age: 23}); //new обов'язково писати перед функцією
// породжуємо новий об'єкт, тому і завдяки new виділяємо нову комірку в пам'яті,
console.log(user1);
console.log(user1.greeting('hello'));

//console.log нічого не ретьорнить return/нічого не повертає

let user2=new User ('vasya', 34,[],{name:' anya', age:123});
let friend= {
    name:'anton',
    asd:'qweewq',
    qwe:'asddsa'
}

user2.greeting.call(friend,'sthfjgh','fhgj','fghdhgf');
user2.greeting.apply(friend,['aloha','asd']);

//Call - підмінаю. Функція, яка викликається у функції, за допомогою слова call ми підміняємо контекст ключового слова this
//тепер call зсилає this на friend (anton)

// Ми від якогось об'єкта викликаємо функцію і хочемо, щоб вона працювала в іншому об'єкті.
// Call та Apply підміняють контекст this, відрізняються тільки тим, як я буду передавати аргументи для цієї функції.

//Call-приймає невизначену кількість аргументів, через кому. REST ARGUMENT.
//Apply-робить те саме,що і call, але приймає два аргументи : перший звичайний, другий масив всіх аргументів, яких треба передати у первинну функцію

//Bind - підміняє контекст this у нашій функції та робить повноцінну копію для заданої функції.
//Можна передати новий контекст ключового слова this та через кому можна передати всі необхідні аргументи для greeting
let greetingCopy=user2.greeting.bind(friend);

//Всі аргументи можна буде використовувати під час виклику.
greetingCopy('hfjdbgflk');

//Java script - це об'єктно-прототипно орієнтована мова.
//Prototype- це звернення до властивостей proto, який знаходиться в будь-якому об'єкті. Тобто всі об'єкти зроблені на прототипах.
// доступаємось до прототипа і даємо йому нову інформацію\властивість.
//Класи та типи - це те саме.
// Array [], [[]],[[[]]] - сімейство array.
Array.prototype.printSelf = function (){
    console.log(this)         //this-це масив з яким я буду працювати в майбутньому.Змилається на майб об'єкт нашого масиву Array
}
let numbers=[1,22,33];
numbers.printSelf();
//Prototype-це можливість розширювати не наші класи.
//Тобто тепер будь-який об'єкт сімейства Array тепер має за замовчуванням властивість printSelf.
// Використовуємо тоді, коли хочемо, щоб якась функція належала тільки об'єктам певного типу\сімейства.
// Сімейство-це певний тип.

class UserPuser{
constructor() {

    this.name= name;
    this.age = age;
    this.skills= skills;
}
    // set name(value) {
    //     this._name = value;
    // }
    // get age() {
    //     return this._age;
    // }
    // get name() {
    //     return this._name;
    // }
    // constructor(name, age) {
    //     this._name = name;
    //     this._age = age;

        // name;
        // age;
        // Alt+Insert= побудує нам конструктор зі всіма необхідними аргументами.
        //Getter - функції, які дозволяють нам змінювати щось.

    greeting(){         //метод - це функція описана в межах якогось класу.
        console.log(`hello my name is ${this.name}`)
    }
}
// class - це можливість зробити шаблон.Це ця сама функція-конструктор, тільки з новою синтаксичною конструкцією.
// Допомагає розподілити характеристики з функціями.

let userPuser= new UserPuser('asd', 123,[]); //Створюємо новий об'єкт.
console.log(userPuser);    // І в нашому об'єкті є все те, що необхідно.
// ООП- об'єктно-орієнтоване програмування.

userPuser._name='kokos'
console.log(userPuser); // переназвало name

//Extends - розширення, наслідування.
//SuperUser наслідує UserPuser. SuperUser бере все те саме, що є у UserPuser і вже може це використовувати.
// Функції, конструктори, класи - це все силочні типи.(примітиву немає)
class SuperUser extends UserPuser{
constructor(name, age,skills) {
    super(name, age);              //super (конструктор) - це те саме, що і this (посилання на батьківський конструктор)
                                  //ми делегували частину нашого об'єкту SuperUser створити вашого батьківського класу
this.skills=skills;

}
}

let superUser=new SuperUser('ivan',41, [1,22,333]);
superUser.greeting()



function  Admin(login, password){
    this.login=login;
    this.password=password;

}
 function SuperAdmin(login, password, authority){
    Admin.call(this, login, password)     //this (ще ненароджений майбутній об'єкт) - це майбутній об'єкт, який буде породженийфункцією-конструктором SuperAdmin
                                              //підміна контексту  this.login=login;
                                             // this.password=password;
     this.authority=authority
 }                         //таким чином зробили наслідування\розширення
// Скорочено буде так
function SuperAdmin1 (login, password, authority){
    Admin.apply(this, arguments)  //arguments-це масив всіх моїх аргументів, тобто [login, password, authority]
    //Але!!! в Admin існує тільки два аргументи тільки login та password, authority буде ігнорований.
    // Послідовність аргументів обов'язково повинна зберігатись!

    this.authority=authority
}































