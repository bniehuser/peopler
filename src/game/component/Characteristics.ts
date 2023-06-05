import { Component } from "./Component";

type CharacteristicsData = {
    happiness: number;
    health: number;
    stamina: number;
    strength: number;
    agility: number;
    intelligence: number;
}
export class CharacteristicsComponent extends Component<CharacteristicsData> {
    _defaultData = {
        happiness: 1,
        health: 100,
        stamina: 10,
        strength: 10,
        agility: 10,
        intelligence: 10,
    }
}
