type SumaParameter = string | number;

function Suma(num1: SumaParameter, num2: SumaParameter): SumaParameter {
    return Number(num1) + Number(num2);
}

interface Int1 {
    prop1: number;
}
interface Int2 {
    prop2: number;
}
type InterfaceMix = Int1 | Int2;

//One attribute or the other one or both are accepted

const interfaceMix1: InterfaceMix = {
    prop1: 1,
};

const interfaceMix2: InterfaceMix = {
    prop2: 2,
};

const interfaceMix3: InterfaceMix = {
    prop1: 1,
    prop2: 2,
};
