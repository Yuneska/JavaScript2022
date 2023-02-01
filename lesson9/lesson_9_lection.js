//DOM (document object model)(об'єктна модель документу)
//document-це наш html документ, який браузер сприймає його як об'єкт
//браузер спроможний сприймати документ, як джаваскріптовий об'єкт
console.log(document);
console.log(document.head);
console.log(document.body.innerHTML);
console.log(document.body.children);
//children-це всі дочірні елементи елементу body. Вони собою являють таких тип даних,
// як HTML Collection, тобто це клас, це сутність, це якесь креслення, сімейство.
// Це колекція\список, якихось певних html елементів. Виглядає як масив, але це насправді псевдомасив.
//Псевдомасив-виглядає, як масив, але по факту це звичайний js об'єкт.
//Node-це вузли, до яких відносяться коментарі та тексти.

// <ul> є дочірними елементами body

//Live Collection (жива колекція) \ Get elements - методи пошуку елементів:
//ID
//Пошук по ідентифікаторах (бере елемент по ідентифікатору) - поверне нам ОДИН елемент ПЕРШИЙ, якого зустріне.
//Назва ідентифікаторів має бути унікальною.
let ulList1 = document.getElementById('list-1');
console.log(ulList1);
console.log(ulList1.children);   //<li> є дочірними елементами <ul>, но <li> не є дочірними елементами body

//CLASS
//Селектор\Пошук по класу - береми елементи по класу
let ulMenu = document.getElementsByClassName('menu');
console.log(ulMenu)

//TAG
//Пошук по тегу
let elementByTagName = document.getElementsByTagName('ul');
console.log(elementByTagName);

//Є дві колекції Live Collection та Not Live Collection

//Коли ми знайшли щось через getElementBy..., то ми маємо посилання на певний елемент,
// ми їх можемо змінювати і далі вони будуть тримати посилання та знати про свої зміни впродовж роботи.

//Коли ми працюємо з querySelector\querySelectorAll, тоді елементи, які ми знаходимо, вони робляться, як snapshots (фотографія)
// і ця фотографія залишається незмінною в цьому місці в процесі нашої роботи.

//query collection -  входить до Not Live Collection
//querySelector -дозволяє за допомогою css стандартного синтаксису зробити пошук по чомусь, можна прописувати, що завгодно
//querySelector по певному селекту(відбору) знайде тільки ОДИН та ПЕРШИЙ елемент.
let element = document.querySelector('.menu');
console.log(element);

//querySelectorAll-допоможе знайти нам всі елементи. Повертає не колекцію, а список вузлів (Nodelist).
let menus = document.querySelectorAll('.menu');
console.log(menus); // навіть, якщо в нас буде один елемент, то цей ідентифікатор всерівно нам спакує його в псевдомасив.
// Тобто нам повернеться не один елемент, а пачка у якій буде спакований один елемент.
// Ідентифікатори кращого всього через querySelector? аніж через querySelectorAll

// Існує клас Node, а від неї вже існують елементи, коментарі, теги, ітд (це та сама колекція тільки вищого порядку).

//
let liList = document.getElementsByTagName('li');
console.log(liList);

let liListElement = liList[0];
console.log(liListElement);
console.log(liListElement.innerHTML);  //item 1 1
liListElement.innerHTML = 'Hello Okten'; //за допомогою js можу змінювати контент
liListElement.style.background = 'yellow';

//classList - це спеціальний підоб'єкт, який маніпулює класами мого елементу
//Add - це метод у classList.
liListElement.classList.add('xxx');
liListElement.classList.add('yyy');

//Remove - видаляє клас.
liListElement.classList.remove('xxx');

for (const li of liList) {
    li.innerHTML = '<b>hello</b>';     //<b></b> - жирний курсив //innerHTML не читає <b></b>
    li.innerText = '<b>hello</b>';        //повертає нам стрінгу <b>hello</b>

    //беремо не весь контент, а поточний
    let text = li.innerText;
    //text='<b>'+text+'</b>'
    text = `<b>${text}</b>`;//Alt+Enter=Inject language or reference -> HTML
    li.innerHTML = text;
}

//Форми - це точка\компонент\елемент сторінки, який збирає інформацію та спроможний її відправити у базу даних.
//У кожного input має бути name

//Параметри урли (url) - спосіб перенесення інформації:
// http://localhost:63342/JavaScript2022/lesson9/lesson_9_lection.html?userame=Inesa&email=inesa98%40i.ua&age=24
//Таким чином передається інформація між клієнтом та базою даних

// Знаходимо форми:
//Forms - повертає нам масив всіх форм. Форми мають, або name, або ідентифікатори
let forms=document.forms;
console.log(forms);
console.log(document.forms.f1); //знаходить нам конкретну форму // вткористовували name of form
let f2=document.forms.f2 //використовуємо ідентифікатор
console.log(f2);
f2.children; //поверне масив елементів, які є в f2
console.log(f2.name.value); //зчитуємо значення name
console.log(f2.surname.value);
console.log(f2.vik.value);

let children=f2.children;
for(const child of children) {
    let attribute = child.getAttribute("name");
    if(attribute!= null && attribute!="")
    console.log(attribute)
}
//Всі дані у формах за замовчуванням зі сторони клієнта з браузера передається тільки у стрінговому варіанті.
//String - це 95% передачі інформації в мережі.

//enctype="multipart/form-data" - форма спроможна відправляти якісь файли
















