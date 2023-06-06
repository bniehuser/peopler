import {Component} from "./Component";
import { Item } from "../entity";

type InventoryItem = {
    item: Item;
    quantity: number;
}

type InventoryData = {
    inventory: InventoryItem[]
}

export class InventoryComponent extends Component<InventoryData> {
    _defaultData = {
        inventory: [],
    }
}
