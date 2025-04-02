export class Soul {
    constructor(id, name, level, description,img) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.description = description;
        this.img = img;
        this.note = "";
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

}