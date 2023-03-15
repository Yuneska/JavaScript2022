const favoritesKey='favorites';
const container=document.getElementById('container');

const users=JSON.parse(localStorage.getItem(favoritesKey)) || [];

users.forEach(user=> {
   const userDiv= document.createElement('div');

   const content=document.createElement('div');
   content.innerText=`${user.name} -- ${user.age} -- ${user.status}`;

   userDiv.appendChild(content);
   container.appendChild(userDiv)

})