// Initialize storage array for characters
const myLibrary = [];

// Character object constructor function
function Character(name, race, classType, identity, bodyType) {
    this.name = name;
    this.race = race;
    this.classType = classType;
    this.identity = identity;
    this.bodyType = bodyType;
}

// Add character to storage array
function addCharacterToLibrary(name, race, classType, identity, bodyType) {
    const newCharacter = new Character(name, race, classType, identity, bodyType);
    myLibrary.push(newCharacter);
}

// Dynamically create character card element with character details
function createCharCard(name, race, classType, identity, bodyType) {
    let charTile = document.createElement("div");
    charTile.className = "characterTile";

    let wanted = document.createElement("div");
    wanted.className = "wanted";
    wanted.textContent = "WANTED"

    let charImg = document.createElement("img");
    charImg.className = "charImg"

    let charName = document.createElement("div");
    charName.className = "charName";

    let charRace = document.createElement("div");
    charRace.className = "charRace";

    let charClass = document.createElement("div");
    charClass.className = "classType";

    let charIdentity = document.createElement("div");
    charIdentity.className = "identity";

    let charBodyType = document.createElement("div");
    charBodyType.className = "bodyType";

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";

    deleteButton.addEventListener("click", () => {
        charTile.remove();
    })

    charName.textContent = name;
    charRace.textContent = race;
    charClass.textContent = classType;
    charIdentity.textContent = identity;
    charBodyType.textContent = bodyType+ "-build";
    charImg.src = `images/${race}_${identity}.svg`;

    // Append used to add multiple elements to parent element
    charTile.append(wanted, charImg, charName, charRace, charClass, charIdentity, charBodyType, deleteButton);

    // Adds the character card before the character creator button
    addButton.before(charTile);
}

// Declare element selectors
const tileArea = document.querySelector(".tileArea");
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
    createCharCard(name, race, classType, identity, bodyType);
    addCharacter.close();
    // Reset form inputs
    charForm.reset();
});

cancelButton.addEventListener("click", () => {
    charForm.reset();
});
