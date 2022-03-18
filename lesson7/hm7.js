// 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this['surname'] = surname;
    this['email'] = email;
    this['phone'] = phone
}

let user1 = new User(1, 'Nikita', 'Moluboga', 'nikita@gmail.com', 380991904535);
console.log(user1)

// 2 Створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrUser = [new User(1, 'Nikita', 'Moluboga', 'nikita@gmail.com', 380991904535),
    new User(2, 'Alla', 'Koalla', 'all@gmail.com', 380199104353),
    new User(3, 'Inesa', 'Stuardesa', 'inesa@gmail.com', 380919135335),
    new User(4, 'Nelia', 'Vovch', 'nelia@gmail.com', 380199119353),
    new User(5, 'Vovlodymyr', 'Pih', 'volodymyr@gmail.com', 380933993545),
    new User(6, 'Stepan', 'Bandera', 'stepan@gmail.com', 380633939232),
    new User(7, 'Svitlana', 'Bodak', 'svitlana@gmail.com', 380677667432),
    new User(8, 'Oleksandr', 'Lysenko', 'oleksandr@gmail.com', 380556354678),
    new User(9, 'Veronika', 'Hirman', 'veronika@gmail.com', 380688668564),
    new User(10, 'Beatris', 'Did', 'beatris@gmail.com', 380937333423)]
console.log(arrUser)

// 3 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти
// з парними id (filter)
let filter = arrUser.filter((item) => {
    if (item.id % 2 === 0) return item
})
console.log(filter)

// 4 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrUser.sort((a, b) => a.id - b.id)
console.log(sort)

// 5 Створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// 6 Створити пустий масив, наповнити його 10 об'єктами Client
let arrClient = [new Client(1, 'Nikita', 'Moluboga', 'nikita@gmail.com', 380991904535, ['book']),
    new Client(2, 'Alla', 'Koalla', 'all@gmail.com', 380199104353, ['fitness', 'aerobic', 'sport']),
    new Client(3, 'Inesa', 'Stuardesa', 'inesa@gmail.com', 380919135335, ['waacking', 'programming', 'cooking']),
    new Client(4, 'Nelia', 'Vovch', 'nelia@gmail.com', 380199119353, []),
    new Client(5, 'Vovlodymyr', 'Pih', 'volodymyr@gmail.com', 380933993545, ['football', 'basteball', 'swimming', 'cooking']),
    new Client(6, 'Stepan', 'Bandera', 'stepan@gmail.com', 380633939232, ['hip-hop']),
    new Client(7, 'Svitlana', 'Bodak', 'svitlana@gmail.com', 380677667432, ['tennis', 'vocals', 'hip-hop']),
    new Client(8, 'Oleksandr', 'Lysenko', 'oleksandr@gmail.com', 380556354678, ['acting']),
    new Client(9, 'Veronika', 'Hirman', 'veronika@gmail.com', 380688668564, ['painting', 'singing', 'art', 'dancing']),
    new Client(10, 'Beatris', 'Did', 'beatris@gmail.com', 380937333423, ['dancing', 'singing'])]
console.log(arrClient)

// 7 Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort2 = arrClient.sort((a, b) => a.order.length - b.order.length)
console.log(sort2)