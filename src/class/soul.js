export class Soul {
    constructor(id, name, level, description) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.description = description;
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