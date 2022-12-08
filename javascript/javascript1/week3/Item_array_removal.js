// ----------------------------------------------------------------------------------------Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
const nameToRemove = "Ahmad";
  
// Write some code here

names.splice(names.indexOf(nameToRemove), 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']