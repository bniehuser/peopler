export class CharacteristicsComponent {
    happiness: number;
    health: number;
    stamina: number;
    strength: number;
    agility: number;
    intelligence: number;

    constructor() {
        this.happiness = 0;
        this.health = 100;
        this.stamina = 100;
        this.strength = 100;
        this.agility = 100;
        this.intelligence = 100;
    }
}