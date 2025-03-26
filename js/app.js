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
                <img src="${character.soul.img || "data/img/noimg.jpg"}" ></img>
                <p>${character.soul.description || "Pas de description"}</p>
                <p>Race: ${character.race || "Inconnu"} | Classe: ${character.classCh.nameClassCh || "Inconnu" }</p>
                
            </div>
        `).join("");
    }

    retourHome(){
        document.getElementById("character-detail").innerHTML = ``;
        app.renderCharacterList();
    }

    showCharacterDetail(id) {
        const character = this.characters.find(c => c.soul.id === id);
        if (!character) return;

        document.getElementById("character-detail").innerHTML = `
            <div class="d-flex flex-row  w-50 justify-content-center">
                <div class="align-self-start"> 
                    <button class="btn btn-dark " onclick="app.retourHome()">← Retour</button>
                </div>

                <div class="character-card ${character.race}">
                    <h2>${character.soul.name} (LVL ${character.soul.level})</h2>
                    <img src="${character.soul.img || "data/img/noimg.jpg"}" ></img>
                    <p>Classe: ${character.classCh.nameClassCh}</p>
                    <p>Race: ${character.race}</p>
                    <p>PV: ${character.classCh.pv} | Mana: ${character.classCh.mana}</p>
                    <p>Force: ${character.stats.force} | Dextérité: ${character.stats.dexterite}</p>
                    <p>Constitution: ${character.stats.constitution} | Intelligence: ${character.stats.intelligence}</p>
                    <p>Sagesse: ${character.stats.sagesse} | Charisme: ${character.stats.charisme}</p>
                    <p>Skills : ${character.skill} </p>
                    <button onclick="app.evolve(${id})">Donner de l'exp</button>
                    <button onclick="app.addToFavorites(${id})">Ajouter aux favoris</button>
                </div>
            </div>
        `;
        document.getElementById("character-list").innerHTML =``
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
        app.showCharacterDetail(id);
    }
}

const app = new App();
window.app = app;