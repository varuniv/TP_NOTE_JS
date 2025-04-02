export class CharacterViews {
    static renderCharacterList(characters) {
        const container = document.getElementById("character-list");
        container.innerHTML = characters.map(character => `
            <div class="character-card ${character.race}" onclick="app.showCharacterDetail(${character.soul.id})">
                <h3>${character.soul.name} (LVL ${character.soul.level})</h3>
                <img src="${character.soul.img || "data/img/noimg.jpg"}" loading="lazy" ></img>
                <p>${character.soul.description || "Pas de description"}</p>
                <p>Race: ${character.race || "Inconnu"} | Classe: ${character.classCh.nameClassCh || "Inconnu" }</p>
                <p> Note: ${character.soul.note || "Pas de note "}<p>
            </div>
        `).join("");
    }

    static renderCharacterDetail(character) {
        document.getElementById("character-detail").innerHTML = `
            <div class="d-flex flex-row w-50 justify-content-center">
                <div class="align-self-start"> 
                    <button class="btn btn-dark" onclick="app.retourHome()">← Retour</button>
                </div>

                <div class="character-card ${character.race}">
                    <h2>${character.soul.name} (LVL ${character.soul.level})</h2>
                    <img src="${character.soul.img || "data/img/noimg.jpg"}" loading="lazy" ></img>
                    <p>Classe: ${character.classCh.nameClassCh}</p>
                    <p>Race: ${character.race}</p>
                    <p>PV: ${character.classCh.pv} | Mana: ${character.classCh.mana}</p>
                    <p>Force: ${character.stats.force} | Dextérité: ${character.stats.dexterite}</p>
                    <p>Constitution: ${character.stats.constitution} | Intelligence: ${character.stats.intelligence}</p>
                    <p>Sagesse: ${character.stats.sagesse} | Charisme: ${character.stats.charisme}</p>
                    <p>Skills : ${character.skill} </p>
                    <button onclick="app.evolve(${character.soul.id})">Donner de l'exp</button>
                    <button onclick="app.addToFavorites(${character.soul.id})">Ajouter aux favoris</button>
                    <input type="number" id="note-${character.soul.id}" min="0" max="5" step="1" value="2">
                    <button onclick="app.addNote(${character.soul.id}, document.getElementById('note-${character.soul.id}').value)">Ajouter Note</button>
                </div>
            </div>
        `;
        document.getElementById("character-list").innerHTML = ``;
    }

    static clearCharacterDetail() {
        document.getElementById("character-detail").innerHTML = ``;
    }

    static renderAddCharacterForm() {
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

                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
    
                <button type="submit">Créer le personnage</button>
            </form>
        `;
    }
}