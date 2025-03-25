import { Provider } from "./provider.js";

class App {
    constructor() {
        this.init();
    }

    async init() {
        this.characters = await Provider.getCharacters();
        this.renderCharacterList();
    }

    renderCharacterList() {
        const container = document.getElementById("character-list");
        container.innerHTML = this.characters.map(character => `
            <div class="character-card ${character.race}" onclick="app.showCharacterDetail(${character.soul.id})">
                <h3>${character.soul.name} (LVL ${character.soul.level})</h3>
                <p>${character.soul.description || "Pas de description"}</p>
                <p>Race: ${character.race} | Classe: ${character.classCh.nameClassCh}</p>
                <p>PV: ${character.classCh.pv} | Mana: ${character.classCh.mana}</p>
                <p>Force: ${character.stats.force} | Dextérité: ${character.stats.dexterite}</p>
                <p>Constitution: ${character.stats.constitution} | Intelligence: ${character.stats.intelligence}</p>
                <p>Sagesse: ${character.stats.sagesse} | Charisme: ${character.stats.charisme}</p>
            </div>
        `).join("");
    }

    showCharacterDetail(id) {
        const character = this.characters.find(c => c.soul.id === id);
        if (!character) return;

        document.getElementById("character-detail").innerHTML = `
            <div class="character-card ${character.race}">
                <h2>${character.soul.name} (LVL ${character.soul.level})</h2>
                <p>Classe: ${character.classCh.nameClassCh}</p>
                <p>Race: ${character.race}</p>
                <p>PV: ${character.classCh.pv} | Mana: ${character.classCh.mana}</p>
                <p>Force: ${character.stats.force} | Dextérité: ${character.stats.dexterite}</p>
                <p>Constitution: ${character.stats.constitution} | Intelligence: ${character.stats.intelligence}</p>
                <p>Sagesse: ${character.stats.sagesse} | Charisme: ${character.stats.charisme}</p>
                <button onclick="app.evolve(${id})">Donner de l'exp</button>
                <button onclick="app.addToFavorites(${id})">Ajouter aux favoris</button>
            </div>
        `;
    }

    addToFavorites(id) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

    evolve(id){
        const character = this.characters.find(c => c.soul.id === id);
        console.log(character);
        character.lvlUp();
        console.log(character);
    }
}

const app = new App();
window.app = app;