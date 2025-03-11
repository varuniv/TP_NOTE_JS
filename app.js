import { fetchCharacters } from "./provider.js";

document.addEventListener("DOMContentLoaded", async () => {
    const characters = await fetchCharacters();
    console.log(characters); // Affichage des données récupérées
    renderCharacterList(characters);
});

function renderCharacterList(characters) {
    const container = document.getElementById("character-list");
    container.innerHTML = characters.map(char => `<div>${char.name}</div>`).join('');
}