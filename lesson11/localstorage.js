// Є масив -
const users = [
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
// Створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.Створити сторніку
// favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const favoritesKey= 'favorites';
localStorage.setItem(favoritesKey, JSON.stringify([]))  //setItem додати нашому ключу //запхали пустий масив.

const container=document.getElementById('container');

users.forEach(user=>{
   const userDiv=document.createElement('div');
   container.appendChild(userDiv);

   const content=document.createElement('div')
    content.innerText=`${user.name} -- ${user.age} -- ${user.status}`;

   const btn= document.createElement('button');
   btn.innerText='Click me';

   userDiv.append(content, btn);

   btn.onclick=()=>{
    const favorites=JSON.parse(localStorage.getItem(favoritesKey)) || []
    //або, якщо там нічого немає, то дай мені пустий масив.
   favorites.push(user);
   localStorage.setItem(favoritesKey, JSON.stringify(favorites));

   btn.disabled=true //якщо раз клікнули на кнопку, то вона більше неактивна
}})