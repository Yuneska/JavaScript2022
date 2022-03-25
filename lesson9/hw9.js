// 1) Все робити за допомоги js.
// a) створити блок
let div = document.createElement('div')

// b) додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// c) додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'pink';
div.style.color = 'white';
div.style.fontSize = '50px';

// d) додати цей блок в body.
document.body.appendChild(div)

// e) клонувати його повністю, та додати клон в body.
let clonediv = div.cloneNode(true);
document.body.appendChild(clonediv)

// 3) Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${element.title} ${element.monthDuration}`;
    document.body.appendChild(div)
}

// 4) Є масив coursesAndDurationArray
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');

    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = element.title;

    let p = document.createElement('p');
    p.classList.add('description')
    p.innerText = element.monthDuration;

    div.appendChild(p)
    div.appendChild(h1)
    document.body.appendChild(div)
}