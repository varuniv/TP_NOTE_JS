export class Profile {
    constructor(name){
        this.name = name;
        this.favoris = {};
    }

    getName(){
        return `${this.name}`
    }
    
    getFavoris(){
        return `${this.favoris}`
    }
}