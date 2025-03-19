export class Equipement {
    constructor(id, nom, type, def, attack, remainingUse) {
      this.id = id;
      this.nom = nom;
      this.type = type;
      this.def = def;
      this.attack = attack;
      this.remainingUse = remainingUse;
    }
  
    getBonusAttack(){
      return this.attack;
    }

    getBonusDefense(){
        return this.def;
    }

    get idEquipement(){
      return this.id;
    }

    get nomEquipement(){
      return this.nom;
    }

    get typeEquipement(){
      return this.type;
    }

    get utilisationsRestantes(){
      return this.remainingUse;
    }
}