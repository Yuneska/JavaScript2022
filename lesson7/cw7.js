// 1 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// a) drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// b) info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// c) increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// d) changeYear (newValue) - змінює рік випуску на значення newValue
// e) addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model,production, year, maxspeed, volume){this.model=model;
// this['production']=production;
// this['year']=year;
// this['maxspeed']=maxspeed;
// this.volume=volume;
// this.drive=function (){console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`) };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function')
//                 console.log(`${key} - ${this[key]}`)
//         }}
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed = this.maxspeed+ newSpeed
//         };
//     this.changeYear=function (newValue){
//         this['year']=newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//     }
// let car1 = new Cars('Porsche', 'German', 2020, 270, 2.0)
// console.log(car1)
// Cars.drive()
// Cars.info()
// Cars.increaseMaxSpeed(43)
// Cars.drive()
// Cars.changeYear(2022)
// Cars.info()
// Cars.addDriver('Nazar')
// console.log(car1)

// 2 (Те саме, тільки через клас) Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// a) drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// b) info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// c) increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// d) changeYear (newValue) - змінює рік випуску на значення newValue
// e) addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, production, year, maxspeed, volume) {
        this.model = model;
        this['production'] = production;
        this['year'] = year;
        this['maxspeed'] = maxspeed;
        this.volume = volume;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю${maxspeed} на годину`)};
this.info= function(){for(const item in this)
    if (typeof this[item]!=='function')
        console.log(`${item} - ${this[item]}`)};
this.increaseMaxSpeed=function (newSpeed){this.maxspeed=this.maxspeed+newSpeed};
this.changeYear=function(newValue){this.year=newValue};
this.addDriver=function (driver){this.driver=driver}
    }
}
let car2 = new Car('Tesla', 'USA', 2020, 300, 3.0);
console.log(car2)
car2.info()
car2.drive()
car2.increaseMaxSpeed(12)
car2.drive()
car2.changeYear(2022)
car2.info()
car2.addDriver('Oleg')
console.log(car2)


// 3 Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

// 4 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
