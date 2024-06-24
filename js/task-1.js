const lists = document.querySelectorAll("li ul");

for (const list of lists) {
    list.classList.add("js-list");
}

const titles = document.querySelectorAll("h2");

for (const title of titles) {
    title.classList.add("js-list-titles");
}

const listElements = document.querySelectorAll(".item li");

for (const listElement of listElements) {
    listElement.classList.add("js-list-element");
}

const categories = document.querySelectorAll(".item");


console.log("Number of categories: ", categories.length);

categories.forEach((element) => {
    const title= element.querySelector("h2");
    console.log("Category: ", title.textContent);
    const numberOfElements= element.querySelectorAll("li");
    console.log("Elements: ", numberOfElements.length);
})

