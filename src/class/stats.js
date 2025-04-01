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

    upStats() {
        this.force += Math.max(Math.trunc(this.force/10), 1);
        this.dexterite += Math.max(Math.trunc(this.dexterite/10), 1);
        this.constitution += Math.max(Math.trunc(this.constitution/10), 1);
        this.intelligence += Math.max(Math.trunc(this.intelligence/10), 1);
        this.sagesse += Math.max(Math.trunc(this.sagesse/10), 1);
        this.charisme += Math.max(Math.trunc(this.charisme/10), 1);
    }
    
}