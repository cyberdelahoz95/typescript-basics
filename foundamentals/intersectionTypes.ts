interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceIntersection = Interface1 & Interface2;

// both attributes are required
const interfaceInterswection: InterfaceIntersection = {
    prop1: 1,
    prop2: 23,
};
