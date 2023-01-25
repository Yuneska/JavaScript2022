// 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
    this.id=id;
    this.name=name;
    this['surname']=surname;
    this['email']=email;
    this.phone=phone;
}
let user1=new User(1,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user2=new User(2,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user3=new User(3,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user4=new User(4,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user5=new User(5,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user6=new User(6,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user7=new User(7,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user8=new User(8,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user9=new User(9,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
let user10=new User(10,'Vasya','Popkin', 'asdqwe@gmail.com','0987654321');
const array=[];
array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

// 2 Взяти масив з  User [] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter= array.filter (value=> value.id%2===0);
console.log(filter);

// 3 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)//
let sort=array.sort((a,b)=>a.id-b.id);
console.log(sort);

// 4 Створити клас для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів). Створити пустий масив, наповнити його 10 об'єктами Client.
class Client extends User {
    constructor(id, name, surname, email, phone,order) {
        super(id, name, surname, email, phone);
        this.order=order;
    }
}
let client1=new Client(1, 'Nikita', 'Moluboga', 'nikita@gmail.com', 380991904535, ['book']);
let client2=new Client(2, 'Alla', 'Koalla', 'all@gmail.com', 380199104353, ['fitness', 'aerobic', 'sport']);
let client3=new Client(3, 'Inesa', 'Stuardesa', 'inesa@gmail.com', 380919135335, ['waacking', 'programming', 'cooking']);
let client4=new Client(4, 'Nelia', 'Vovch', 'nelia@gmail.com', 380199119353, []);
let client5=new Client(5, 'Volodymyr', 'Pih', 'volodymyr@gmail.com', 380933993545, ['football', 'basteball', 'swimming', 'cooking']);
let client6=new Client(6, 'Stepan', 'Bandera', 'stepan@gmail.com', 380633939232, ['hip-hop']);
let client7=new Client(7, 'Svitlana', 'Bodak', 'svitlana@gmail.com', 380677667432, ['tennis', 'vocals', 'hip-hop']);
let client8=new Client(8, 'Oleksandr', 'Lysenko', 'oleksandr@gmail.com', 380556354678, ['acting']);
let client9=new Client(9, 'Veronika', 'Hirman', 'veronika@gmail.com', 380688668564, ['painting', 'singing', 'art', 'dancing']);
let client10=new Client(10, 'Beatris', 'Did', 'beatris@gmail.com', 380937333423, ['dancing', 'singing']);
let arrClient=[];
arrClient.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrClient);

// 5 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1=arrClient.sort((a,b)=>(a.order.length-b.order.length));
console.log(sort1)

// 6 Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// а drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// б info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// в increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// г changeYear (newValue) - змінює рік випуску на значення newValue
// д addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, production, year, maxspeed, volume){
    this.model=model;
    this.production=production;
    this.year=year;
    this['maxspeed']=maxspeed;
    this['volume']=volume;

    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };

    this.info=function (){
        for(const key in this){
            if(typeof [key]==='function'){
               console.log( `${key} - ${this[key]}`)
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxspeed=this.maxspeed+newSpeed;
    };

    this.changeYear=function (newValue){
        this.year=newValue
    };

    this.addDriver=function (driver){
        this.driver=driver
    }
}
let car = new Cars('Porsche', 'German', 2020, 270, 2.0)
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(21);
car.changeYear(2023);
car.addDriver('Nikita');
console.log(car);

// 7 (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// а drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// б info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// в increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// г changeYear (newValue) - змінює рік випуску на значення newValue
// д addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку