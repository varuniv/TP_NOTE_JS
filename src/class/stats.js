export class Stats {
    constructor(force, dexterite, constitution, intelligence, sagesse, charisme) {
        this.force = force;
        this.dexterite = dexterite;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.sagesse = sagesse;
        this.charisme = charisme;
    }


    getForce(){
        return `${this.force}`
    }
    getDexterite(){
        return `${this.dexterite}`
    }
    getConstitution(){
        return `${this.constitution}`
    }
    getIntelligence(){
        return `${this.intelligence}`
    }
    getSagesse(){
        return `${this.sagesse}`
    }
    getCharisme(){
        return `${this.charisme}`
    }
}
 