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
        (async () => {
            try {
                await Provider.updateCharacter(id, {
                    LVL: character.soul.level,
                    PV: character.classCh.pv,
                    Mana: character.classCh.mana,
                    Force: character.stats.force,
                    Dexterite: character.stats.dexterite,
                    Constitution: character.stats.constitution,
                    Intelligence: character.stats.intelligence,
                    Sagesse: character.stats.sagesse,
                    Charisme: character.stats.charisme
                });
                console.log("Mise à jour réussie");
            } catch (error) {
                console.error("Erreur lors de la mise à jour :", error);
            }
        })();
        app.showCharacterDetail(id);
    }

    ShowAddCharacter() {

        document.getElementById("character-detail").innerHTML = `
            <h2>Créer un nouveau personnage</h2>
            <form id="character-form">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required><br>

                <label for="gender">Genre :</label>
                <select id="gender" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br>

                <label for="class">Classe :</label>
                <input type="text" id="class" name="class" required><br>

                <label for="level">Niveau :</label>
                <input type="number" id="level" name="level" value="1" min="1"><br>

                <label for="race">Race :</label>
                <input type="text" id="race" name="race" required><br>

                <label for="pv">PV :</label>
                <input type="number" id="pv" name="pv" required><br>

                <label for="armure">Armure :</label>
                <input type="number" id="armure" name="armure"><br>

                <label for="mana">Mana :</label>
                <input type="number" id="mana" name="mana"><br>

                <label for="description">Description :</label>
                <textarea id="description" name="description"></textarea><br>

                <h3>Statistiques</h3>
                <label for="force">Force :</label>
                <input type="number" id="force" name="force" required><br>

                <label for="dexterite">Dextérité :</label>
                <input type="number" id="dexterite" name="dexterite" required><br>

                <label for="constitution">Constitution :</label>
                <input type="number" id="constitution" name="constitution" required><br>

                <label for="intelligence">Intelligence :</label>
                <input type="number" id="intelligence" name="intelligence" required><br>

                <label for="sagesse">Sagesse :</label>
                <input type="number" id="sagesse" name="sagesse" required><br>

                <label for="charisme">Charisme :</label>
                <input type="number" id="charisme" name="charisme" required><br>

                <button type="submit">Créer le personnage</button>
            </form>
        `;
        document.getElementById("character-list").innerHTML =``
    }
}

const app = new App();
window.app = app;