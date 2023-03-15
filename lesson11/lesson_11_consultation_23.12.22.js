// Отримуємо коментарі від постів.
// fetch (`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//     //postId - прив'язка постів до коментарів
//     // можемо звертатися до поточного поста та його коментарів.
//     Отримаємо масив коментарів, які потім будемо ітерувати.

// .then (value => value.json() )
//     .then(value => {
//     })

// Натискання на кнопку
//href - це то на що ми будемо зсилатися.
// btn.onclick()=()=>{
//     location.href=`details.html?id=${user.id}`;
// }

// btn1.onclick() = () => {
//     const anchorElement = document.createElement('a');
//     anchorElement.href = `details.html?id=${user.id}`;
//     anchorElement.innerText = 'Click me';
//
//     btn.appendChild(anchorElement)
// }

//Як правильно складати шлях
// anchorElement=`lesson10/details.html?id=${user.id}`
// якщо хочемо піти на рівень вище, то пишемо дві крапки і слеш ../

