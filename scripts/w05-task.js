/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(templeName);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesList = await response.json();
    displayTemples(templesList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    switch (document.querySelector("#sortBy").value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case "noutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case "older":
            displayTemples(temples.filter(temple => temple.dedicated.includes('Utah')));
        case "all":
            displayTemples(temples);
            break;
    }
}



getTemples();

/* Event Listener */

document.querySelector("sortBy").addEventListener("change", () => sortBy(templesList));

