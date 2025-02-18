const myLibrary = [];

function Game(title, studio, genre, platform) {
    this.title = title;
    this.studio = studio;
    this.genre = genre;
    this.platform = platform;
}

function addGameToLibrary(title, studio, genre, platform) {
    const newGame = new Game(title, studio, genre, platform);
    myLibrary.push(newGame);

}

addGameToLibrary("Apex Legends", "Respawn Entertainment", "Battle Royale", "Multiplatform")
addGameToLibrary("Contra", "Konami", "Run and Gun", "NES");
addGameToLibrary("Resident Evil 4 Remake", "Capcom", "Survival Horror", "Multiplatform");
addGameToLibrary("Pokemon Siler", "GameFreak", "Japanese RPG", "Gameboy");


const tileArea = document.querySelector(".tileArea");

function displayGames(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        let gameTile = document.createElement("div");
        gameTile.className = "gameTile";
        gameTile.textContent = myLibrary[i].title;
        tileArea.appendChild(gameTile);
    }
}

