// ----------------------------------------------------------------------------------NOnoN0nOYes (Note taking app)\
// ----------------------------------------------------------------------------------Save a note

const notes = [];

function saveNote(content, id) {
  notes.push({content:content, id:id});
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// --------------------------------------------------------------------------------------------Get a note

function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++){
    if (id === notes[i].id) {
       return notes[i];
    } else if (isNaN(id) || id === null) {
      return `error`;
    }  
  }
}

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}



// ----------------------------------------------------------------------------------Log out notes


function logOutNotesFormatted() {
  // your code here
  notes.forEach((i) => {
    console.log(`The note with id: ${i.id}, has the following note text: ${i.content}`);
  });
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
