// Startup name generator

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const firstWords = ['Easy', 'Awesome', 'Funny', 'Pink', 'Last', 'The', 'Big', 'Light', 'Hard', 'My'];
const secondWords = ['Corporation', 'Team', 'Group', 'Factory', 'Builder', 'Hub', 'World', 'People', 'Machine', 'Job'];
const startupName = firstWords[randomNumber1] + ' ' + secondWords[randomNumber2];
console.log(`The startup:"${startupName}" contains ${startupName.length} characters`);