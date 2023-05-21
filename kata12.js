const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let chosen = '';
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < bakeryA.length; j++) {
      for (let k = 0; k < bakeryB.length; k++) {
        if (recipes[i]['ingredients'][0] === bakeryA[j] && recipes[i]['ingredients'][1] === bakeryB[k]) {
          chosen = recipes[i]['name'];
        } else if (recipes[i]['ingredients'][1] === bakeryA[j] && recipes[i]['ingredients'][0] === bakeryB[k]) {
          chosen = recipes[i]['name'];
        }
      }
    }
  }
  return chosen;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

let bakeryC = ['potatoes', 'bay leaf', 'raisins'];
let bakeryD = ['red bean', 'dijon mustard', 'apples'];
let recipes1 = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryC, bakeryD, recipes1));