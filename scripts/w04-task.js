/* LESSON 3 - Programming Tasks */
/* Profile Object  */
/* Populate Profile Object with placesLive objects */
/* DOM Manipulation - Output */

/* Name */
let myProfile = {
    name: "Sean Sonderegger",

// /* Photo with attributes */
    photo: 'images/ME.jpg',

// /* Favorite Foods List*/
    favoriteFoods: ["Pizza",
    "Pasta",
    "Burger",
    "Tacos",
    "Ribs"], 

// /* Hobbies List */
    hobbies: ["Fishing", "Reading", "Movies", "Woodworking"],
}
/* Places Lived DataList */
    // mySelf.placesLived = [];


document.querySelector("#name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
// document.getElementById("photo").setAttribute = myProfile.src;
document.getElementById("photo").alt = myProfile.name;
// document.getElementById("photo").setAttribute = myProfile.alt;
// document.querySelector("#favorite-foods").textContent = myProfile.favoriteFoods;
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


myProfile.placesLived = [];
myProfile.placesLived.push(
    {
        place: "Broken Arrow, OK",
        length: "35 years",
    }
);

let placesLived = document.querySelector("#places-lived")
myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    placesLived.appendChild(dt);

    const dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLived.appendChild(dd);   
    // document.getElementById("places-lived").textContent = myProfile.placesLived;
});

