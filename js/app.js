import { Provider } from "./provider.js";
import { CharacterViews } from "../view/views.js";

class App {
    constructor() {
        this.init();
    }

    async init() {
        this.characters = await Provider.getCharacters();
        this.renderCharacterList();
    }

    renderCharacterList() {
        CharacterViews.renderCharacterList(this.characters);
    }
    

    retourHome() {
        CharacterViews.clearCharacterDetail();
        this.renderCharacterList();
    }

    showCharacterDetail(id) {
        const character = this.characters.find(c => c.soul.id === id);
        if (!character) return;
        CharacterViews.renderCharacterDetail(character);
    }

    
    addToFavorites(id) {
        let profile = JSON.parse(localStorage.getItem("profile")) || { name: "local", favoris: [] };
    
        
        if (!profile.favoris.includes(id)) {
            profile.favoris.push(id); 
            localStorage.setItem("profile", JSON.stringify(profile));
             
        }
    }

    addNote(id, evaluate) {
        const character = this.characters.find(c => c.soul.id === id);
        character.soul.note = evaluate;

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
                    Charisme: character.stats.charisme,
                    Note : character.soul.note
                });
                console.log("Mise à jour réussie");
            } catch (error) {
                console.error("Erreur lors de la mise à jour :", error);
            }
        })();
        
        this.showCharacterDetail(id);
    }

    DisplayFavorites() {
        let profile = JSON.parse(localStorage.getItem("profile")) || { name: "typicode", favoris: [] };

        if (profile.favoris.length === 0) {
            console.log("Aucun favori trouvé.");
            return;
        }
        this.fav = []
        profile.favoris.forEach((id) => {
            const character = this.characters.find(c => c.soul.id === id)
            this.fav.push(character)
            
        })
        CharacterViews.renderCharacterList(this.fav)
    }
    
    

    evolve(id) {

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
        
        this.showCharacterDetail(id);
    }

    showAddCharacter() {
        CharacterViews.renderAddCharacterForm();
        this.setupCharacterFormSubmit();
    }
    
    setupCharacterFormSubmit() {
        document.getElementById("character-form").addEventListener("submit", async (event) => {
            event.preventDefault();
            const newCharacter = {
                id: Date.now(),
                Nom: document.getElementById("name").value,
                Gender: document.getElementById("gender").value,
                class: document.getElementById("class").value,
                LVL: Number(document.getElementById("level").value),
                Race: document.getElementById("race").value,
                PV: Number(document.getElementById("pv").value),
                Armure: Number(document.getElementById("armure").value),
                Mana: Number(document.getElementById("mana").value),
                Description: document.getElementById("description").value,
                img: document.getElementById("avatar").value,
                Force: Number(document.getElementById("force").value),
                Dexterite: Number(document.getElementById("dexterite").value),
                Constitution: Number(document.getElementById("constitution").value),
                Intelligence: Number(document.getElementById("intelligence").value),
                Sagesse: Number(document.getElementById("sagesse").value),
                Charisme: Number(document.getElementById("charisme").value),
                Equipement: [],
                SKill: [],
                Note: ""
            };
            
            try {
                await Provider.addCharacter(newCharacter);
                alert("Personnage ajouté avec succès !");
                this.init();
            }
            catch (error) {
                console.error("Erreur lors de l'ajout du personnage :", error);
            }
            this.retourHome();
        });
    }
}

const app = new App();
window.app = app;