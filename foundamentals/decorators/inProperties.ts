function logProperty(target, key) {
    let _val = this[key];
    const getter = () => {
        console.log(`Get ${key} = ${_val}`);
        return _val;
    };
    const setter = (newVal) => {
        console.log(`Get ${key} = ${newVal}`);
        _val = newVal;
    };
    Object.defineProperty(target, key, { get: getter, set: setter });
}

class Person {
    @logProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p = new Person("Henry");

p.name = "Platzi";
const nameFromClass = p.name;
