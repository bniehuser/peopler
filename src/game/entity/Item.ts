import {Entity, EntityData} from "./Entity";


type ItemData = EntityData & {
    cost: number;
    weight: number;
}

export class Item extends Entity {
    cost: number;
    weight: number;

    constructor(data: ItemData) {
        super(data)
        this.cost = data.cost;
        this.weight = data.weight;
    }
}