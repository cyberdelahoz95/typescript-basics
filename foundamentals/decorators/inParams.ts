function logParameter(target, properyName, index) {
    const metaDataKey = `log ${properyName}_parameters`;
    if (Array.isArray(target[metaDataKey])) {
        target[metaDataKey].push(index);
    } else {
        target[metaDataKey] = [index];
    }
}

class paramsDecoratorClass {
    greet(@logParameter message: string): string {
        return message;
    }
}

const foo = new paramsDecoratorClass();

foo.greet("Heello");
