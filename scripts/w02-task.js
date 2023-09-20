/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Sean Sonderegger';
const currentYear = new Date().getFullYear();
let profilePicture = 'images/ME.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
/* const imageElement = document.querySelector('images/ME.jpg'); */
yearElement.textContent = currentYear;


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
/* imageElement.setAttribute('src', profilePicture);
/* imageElement.setAttribute('alt', profilePicture); */

/* Step 5 - Array */

const favFoods = ['Pizza', 'Pasta', 'Burgers', 'Tacos']
foodElement.textContent = favFoods;
const pushed1 = favFoods.push('Ribs');
foodElement.innerHTML += `<br>${favFoods}`
const shifted1 = favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`
const popped1 = favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`