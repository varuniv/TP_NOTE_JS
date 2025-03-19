import {Soul} from "../src/class/soul.js";
import {Character} from "../src/class/character.js";
import {ClassCh} from "../src/class/class.js";
import {Stats} from "../src/class/stats.js";
import {Equipement} from "../src/class/equipement.js";
import {ENDPOINT} from "./config.js"


export class Provider {
    static async fetchData(resource) {
        const response = await fetch(`${ENDPOINT}/${resource}`);
        return response.json();
    }

    static async getCharacters() {
        const data = await this.fetchData("personnage");
        return data.map(p => new Character(
            new Soul(p.id, p.Nom, p.LVL, p.Description),
            new ClassCh(p.class, p.class, p.PV, p.Armure, p.Mana),
            p.Gender,
            p.Race,
            p.Equipement.map(e => new Equipement(e.id, e.nom, e.type, e.TypeBonus === 'DEF' ? e.BonusValue : 0, e.TypeBonus === 'ATK' ? e.BonusValue : 0, e.remainingUse || 1)),
            p.SKill,
            new Stats(p.Force, p.Dexterite, p.Constitution, p.Intelligence, p.Sagesse, p.Charisme)
        ));
    }
}