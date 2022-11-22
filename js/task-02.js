const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.getElementById("ingredients");
for (const item of ingredients) {
  const li = document.createElement("li");
  li.textContent = item;
  ulList.append(li);
};

console.log(ulList);