// 1 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// a) drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// b) info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// c) increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// d) changeYear (newValue) - змінює рік випуску на значення newValue
// e) addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, production, year, maxspeed, volume) {
    this.model = model;
    this['production'] = production;
    this['year'] = year;
    this['maxspeed'] = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`)
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    };
    this.changeYear = function (newValue) {
        this['year'] = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Cars('Porsche', 'German', 2020, 270, 2.0)
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(43)
car1.drive()
car1.changeYear(2022)
car1.info()
car1.addDriver('Nazar')
console.log(car1)

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
            console.log(`Їдемо зі швидкістю${maxspeed} на годину`)
        };
        this.info = function () {
            for (const item in this)
                if (typeof this[item] !== 'function')
                    console.log(`${item} - ${this[item]}`)
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxspeed = this.maxspeed + newSpeed
        };
        this.changeYear = function (newValue) {
            this.year = newValue
        };
        this.addDriver = function (driver) {
            this.driver = driver
        }
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
function Popelyushka(name, age, size) {
    this['name'] = name;
    this['age'] = age;
    this['size'] = size;
}

let popelyushky = [
    new Popelyushka('Bella', 23, 37),
    new Popelyushka('Adel', 41, 36),
    new Popelyushka('Ira', 32, 40),
    new Popelyushka('Ivanka', 22, 35),
    new Popelyushka('Vasya', 33, 45),
    new Popelyushka('Marta', 27, 37),
    new Popelyushka('Roksolana', 25, 39),
    new Popelyushka('Svitlana', 33, 37),
    new Popelyushka('Diana', 36, 20),
    new Popelyushka('Yulia', 24, 38),
]
console.log(popelyushky)

// 4 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe
}

let prince = new Prince('Petro', 98, 35)
console.log(prince)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let love = (popelyushky, prince) => {
    for (const item of popelyushky) {
        if (item.size === prince.shoe) {
            return (item.name)
        }
    }
}
console.log(love(popelyushky, prince))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const princess = popelyushky.find((item) => item.size === prince.shoe);
console.log(princess);