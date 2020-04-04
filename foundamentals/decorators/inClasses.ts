function init(target) {
    return class extends target {
        nombre = "Henry";
        apellido = "dlH";

        sayMyName() {
            return `${this.nombre} ${this.apellido}`;
        }
    };
}

@init
class P {
    constructor() {}

    sayMyName() {}
}

const myP = new P();

myP.sayMyName(); // Henry dlH
