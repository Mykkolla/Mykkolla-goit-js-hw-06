const ulCategories = document.querySelectorAll('.item')
//All categories.
console.log(`Number of categories: ${ulCategories.length}`);

const numberandtextCategories = ulCategories.forEach(element => {
    
//Element.
    const textOfulCategories = element.firstElementChild;
    console.log(`Category: ${textOfulCategories.textContent}`);

    const numberofLiCategories = element.lastElementChild;
    console.log(`Elements: ${numberofLiCategories.children.length}`);
});





