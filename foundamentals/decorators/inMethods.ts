function log(target, key) {
    console.log(`key ${key} se ha llamado`);
}

class Persona {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    @log
    sayMyName() {
        return this.name;
    }
}

const myPersona: Persona = new Persona("Henry");

myPersona.sayMyName();
