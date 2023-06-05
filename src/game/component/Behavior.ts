import { Component } from "./Component";

type BehaviorData = {
    behavior: string;
    subBehavior: string;
    targetEntityId: number;
    targetInventoryItemId: number;
}
export class BehaviorComponent extends Component<BehaviorData> {
    _defaultData = {
        behavior: "idle",
        subBehavior: "",
        targetEntityId: -1,
        targetInventoryItemId: -1,
    }
}