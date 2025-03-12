export default class ClassCh {
    constructor(idClassCh, nameClassCh, pv, armure, mana) {
      this.idClassCh = idClassCh;
      this.nameClassCh = nameClassCh;
      this.pv = pv;
      this.armure = armure;
      this.mana = mana;
    }
  
    getName(){
      return this.name;
    }

    getPV(){
      return this.pv;
    }
  
    getArmure(){
      return this.armure;
    }

    getMana(){
      return this.mana;
    }
}