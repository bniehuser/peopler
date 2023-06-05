export class MoodComponent {
    mood: {
        happiness: number;
        healthFactor: number;
        staminaFactor: number;
        strengthFactor: number;
        agilityFactor: number;
        intelligenceFactor: number;
    };

    constructor() {
        this.mood = {
            happiness: 0,
            healthFactor: 0,
            staminaFactor: 0,
            strengthFactor: 0,
            agilityFactor: 0,
            intelligenceFactor: 0,
        };
    }
}