const myLibrary = [];

function Character(name, race, classType, identity, bodyType) {
    this.name = name;
    this.race = race;
    this.class = classType;
    this.identity = identity;
    this.bodyType = bodyType;
}

function addCharacterToLibrary(name, race, classType, identity, bodyType) {
    const newCharacter = new Character(name, race, classType, identity, bodyType);
    myLibrary.push(newCharacter);

}

addCharacterToLibrary("Iggdroth", "Undead Dwarf", "Battle Mage", "Male", "Muscular")


const tileArea = document.querySelector(".tileArea");

function displayCharacters(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        let characterTile = document.createElement("div");
        characterTile.className = "characterTile";

        let characterName = document.createElement("div");
        characterTile.textContent = myLibrary[i].name;
        characterTile.appendChild(characterName);
        
        tileArea.appendChild(characterTile);
    }
}


const addCharacter = document.querySelector("#addCharacter");
const charForm = document.querySelector("#charForm")
const cancelButton = document.querySelector("#cancel");
const addButton = document.querySelector("#add");
const confirmButton = document.querySelector("#confirm");

addButton.addEventListener("click", () => {
    addCharacter.showModal();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const race = document.getElementById("race").value;
    const classType = document.getElementById("classType").value;
    const identity = document.getElementById("identity").value;
    const bodyType = document.getElementById("bodyType").value;

    addCharacterToLibrary(name, race, classType, identity, bodyType);
    displayCharacters(myLibrary);
    addCharacter.close();
    charForm.reset();
});

cancelButton.addEventListener("click", () => {
    charForm.reset();
});
