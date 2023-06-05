// person.ts

import { CharacteristicsComponent } from "../component/Characteristics";
import { MoodComponent } from "../component/Mood";
import { RelationshipsComponent } from "../component/Relationships";

class CombatStatisticsComponent {
    attackDamage: number;
    defense: number;
    evasion: number;

    constructor() {
        this.attackDamage = 10;
        this.defense = 5;
        this.evasion = 2;
    }
}

class BehaviorComponent {
    behavior: string;
    subBehavior: string;
    targetEntityId: number;
    targetInventoryItemId: number;

    constructor() {
        this.behavior = "idle";
        this.subBehavior = "";
        this.targetEntityId = -1;
        this.targetInventoryItemId = -1;
    }
}

class Item {
    itemId: number;
    cost: number;
    weight: number;

    constructor(itemId: number, cost: number, weight: number) {
        this.itemId = itemId;
        this.cost = cost;
        this.weight = weight;
    }
}

class InventoryItem {
    item: Item;
    quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }
}

class InventoryComponent {
    inventory: InventoryItem[];

    constructor() {
        this.inventory = [];
    }
}

class Person {
    entityId: number;
    characteristics: CharacteristicsComponent;
    mood: MoodComponent;
    behavior: BehaviorComponent;
    relationships: RelationshipsComponent;
    inventory: InventoryComponent;
    combatStats: CombatStatisticsComponent;

    constructor(entityId: number) {
        this.entityId = entityId;
        this.characteristics = new CharacteristicsComponent();
        this.mood = new MoodComponent();
        this.behavior = new BehaviorComponent();
        this.relationships = new RelationshipsComponent();
        this.inventory = new InventoryComponent();
        this.combatStats = new CombatStatisticsComponent();
    }
}
