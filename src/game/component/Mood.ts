import { Component } from "./Component";

type MoodData = {
    happiness: number;
    healthFactor: number;
    staminaFactor: number;
    strengthFactor: number;
    agilityFactor: number;
    intelligenceFactor: number;
}
export class MoodComponent extends Component<MoodData> {
    _defaultData = {
        happiness: 1,
        healthFactor: 1,
        staminaFactor: 1,
        strengthFactor: 1,
        agilityFactor: 1,
        intelligenceFactor: 1,
    }
}