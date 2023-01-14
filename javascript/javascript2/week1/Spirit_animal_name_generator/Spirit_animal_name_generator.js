document.addEventListener('DOMContentLoaded', () => {

    const boxName = document.querySelector('.box_name'),
          textName = boxName.querySelector('h2'),
          btnOkName = boxName.querySelector('.ok'),
          addInputName = boxName.querySelector('.add_input');

    const boxAnimal = document.querySelector('.box_animal'),
          textAnimal = boxAnimal.querySelector('h2'),
          btnOkAnimal = boxAnimal.querySelector('.ok'),
          addInputAnimal = boxAnimal.querySelector('.add_input');

    const spiritAnimals = [
        'Porcupine',
        'Antelope',
        'Secretary Bird',
        'Turtle',
        'Bighorn Sheep',
        'Mongoose',
        'Squirrel',
        'Orangutan',
        'Owl',
        'Hummingbird',
        'Praying Mantis'
    ];

    function addSpiritAnimal() {
        btnOkName.addEventListener('click', () => {
            if (addInputName.value.length <= 0) {
                textName.innerHTML = `Try again`;
            } else {
                const randomElementFromArray = Math.floor(Math.random() * spiritAnimals.length);
                textName.innerHTML = `${addInputName.value} - ${spiritAnimals[randomElementFromArray]}`;
            }
        });
    }

    addSpiritAnimal();

    function newSpiritAnimal() {
        btnOkAnimal.addEventListener('click', () => {

            if (addInputAnimal.value.length <= 0) {
                textAnimal.innerHTML = `Try again`;
            } else {
                spiritAnimals.push(addInputAnimal.value);
                textAnimal.innerHTML = `${addInputAnimal.value} was added to the list`;
                console.log(spiritAnimals);
            }     
    });
    }

    newSpiritAnimal();

});