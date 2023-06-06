import { Component } from "./Component";

export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    NON_BINARY = "Non-binary",
}

export enum Ethnicity {
    WHITE = "White",
    BLACK = "Black",
    BROWN = "Brown",
}

export enum Religion {
    ATHEIST = "Atheist",
    AGNOSTIC = "Agnostic",
    PAGAN = "Pagan",
    HINDU = "Hindu",
    BUDDHIST = "Buddhist",
    HEBREW = "Hebrew",
    MUSLIM = "Muslim",
    CHRISTIAN = "Christian",
}


type IdentityData = {
    name: string;
    gender: Gender;
    age: number;
    ethnicity: Ethnicity;
    religion: Religion;
}
export class IdentityComponent extends Component<IdentityData> {
    _defaultData = {
        name: "Randomly Generated",
        gender: Gender.NON_BINARY,
        age: 18,
        ethnicity: Ethnicity.BROWN,
        religion: Religion.AGNOSTIC,
    }
}