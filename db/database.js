var data = require('./data.json');

const fs = require("fs");

class Database {
    constructor() {
        this.data = data;
    }

    save() {
        fs.writeFileSync('./db/frogData.json', JSON.stringify(data));
    }

    getFrog(frogID) {
        var frog = data.frogs.find(x => x.id == frogID);
        if (!frog) {
            console.error('Sorry no frogs here.');
        }
        return frog;
    }

    addFrog(name, diet, misc, url, caption) {
        var newFrog = {
            "name": name,
            "diet": diet,
            "misc": misc,
            "caption": caption,
            "url": url
        };
        data.frogData.push(newFrog);
        this.save();
    }

}

