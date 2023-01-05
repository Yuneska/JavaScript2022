//Map-використовуємо, тоді, коли нам треба щось змінити з нашого об'єкту або масиву
//Замикання - функція у функції, для того, щоб у нас був прихований об'єкт або змінна, інформація,
// яка не повинна потрапити у чужі руки.
//Замикання ми не можемо використовувати на зовні, бо воно існує в області видимості своєї функції.
//Return зсилає на нашого user.

 function userBuilder (name, age){
    let user={name, age} // у замиканні ми зсилаємось за об'єкт
    return{
        userInfo: function(){
            return{...user}
        }
    }
 }

let builder=userBuilder('asd', 100);
console.log(builder.userInfo());

//Деструктуризація
let user={
    name:'kokos',
    age: 31,
    wife: {name:'ananas', age:29},
    skills:['html','js']
};

const {name, age, wife:{wifeName: wifeName}}=user;
console.log(user);

let user2={...user};
console.log(user2)

//Силочні типи даних-це об'єкти та масиви, все інше це примітивні типи даних (linked, reference)

let user1=user; //user1 зсилається на user
console.log(user1);

user1.name='Vasya';
console.log(user1);
console.log(user);

let parse=JSON.parse(JSON.stringify(user1));// user1 не зміниться //розпарсили та користуємось цим об'єктом
console.log(parse);
//Завдяки JSON ми можемо передавати інформацію між різними мовами програмування
// Parse - це метод
