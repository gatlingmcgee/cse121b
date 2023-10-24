/* W05: Programming Tasks */

/* Declare and initialize global variables */
const peopleElement = document.querySelector("#people");
let peopleList = [];

/* async displayPeople Function */
const displayPeople = (people) => {
    people.forEach(people => {
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.textContent = people.name;
        let Bio = document.createElement("h5");
        Bio.textContent = people.bio;
        let nameId = document.createElement("h5");
        nameId.textContent = people.id;
        let language = document.createElement("h4");
        language.textContent = people.language;
        /*let img = document.createElement("img");
        img.setAttribute("src", people.imageUrl);
        img.setAttribute("alt", people.location); */

        article.appendChild(name);
        article.appendChild(Bio);
        article.appendChild(nameId);
        article.appendChild(language);

        peopleElement.appendChild(article);
    });
}

/* async getPeople Function using fetch()*/
const getPeople = async () => {
    const response = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json");
    peopleList = await response.json();
    displayPeople(peopleList);
}

/* reset Function */
const reset = () => {
    peopleElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (people) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "uyg":
            displayPeople(people.filter(people => people.language.includes('Uyghur')));
            break; 
        case "mal":
            displayPeople(people.filter(people => people.language.includes('Maltese')));
            break;
        case "sin":
            displayPeople(people.filter(people => people.language.includes('Sindhi')));
            break;
        case "gal":
            displayPeople(people.filter(people => people.language.includes('Galician')));
            break;
        case "ses":
            displayPeople(people.filter(people => people.language.includes('Sesotho sa Leboa')));
            break;
        case "ice":
            displayPeople(people.filter(people => people.language.includes('Icelandic')));
            break;
        case "hin":
            displayPeople(people.filter(people => people.language.includes('Hindi')));
            break;
        case "bos":
            displayPeople(people.filter(people => people.language.includes('Bosnian')));
            break;
        case "set":
            displayPeople(people.filter(people => people.language.includes('Setswana')));
            break;
        case "isi":
            displayPeople(people.filter(people => people.language.includes('isiZulu')));
            break;

        // case "alpha":
        //    people.sort(function(a, b){return a.name-b.name;});
        //    people.filter(people => people.name()) 
                
        //     people.sort(function(a, b) {
        //         if (a.name < b.name) {
        //             return -1;
        //         } 
        //         if (a.name > b.name) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        //     displayPeople(people);

        // case "reverse":
        //     let name = peopleList.reverse();
        //     displayPeople(name);
        //     break;  
        
        case "all":
            displayPeople(people);
            break;
    }
}

getPeople();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => sortBy(peopleList));