const ulCategories = document.querySelectorAll('.item')
//All categories.
console.log(`Number of categories: ${ulCategories.length}`);

const numberandtextCategories = ulCategories.forEach(element => {
//Element.
    const numberofLiCategories = element.querySelectorAll('ul li');
    const textOfulCategories = element.firstElementChild;

    console.log(`Category: ${textOfulCategories.textContent}`);
    console.log(`Elements: ${numberofLiCategories.length}`);
});





