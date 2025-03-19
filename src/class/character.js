export class Character {
    constructor(Soul, ClassCh , gender, race,  equipement, skill, Stats) {
        this.soul = Soul;
        this.gender = gender;
        this.race = race;
        this.classCh = ClassCh;    
        this.equipement = equipement;
        this.skill = skill;
        this.stats = Stats;
    }

    addEquipment(item) {
        this.equipement.push(item);
        console.log(`${item} added to ${this.name}'s inventory.`);
    }

}
