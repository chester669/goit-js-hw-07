const number = document.querySelector("#categories");
console.log(`Number of categories: ${number.children.length}`);

const categories = document.querySelectorAll("#categories .item");
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const numberOfElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
