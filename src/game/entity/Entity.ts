import {
    CharacteristicsComponent,
    MoodComponent,
    RelationshipsComponent,
    BehaviorComponent, CombatStatisticsComponent, InventoryComponent, IdentityComponent
} from "../component";

const ComponentClasses = {
    relationships: RelationshipsComponent,
    characteristics: CharacteristicsComponent,
    mood: MoodComponent,
    behavior: BehaviorComponent,
    identity: IdentityComponent,
    inventory: InventoryComponent,
    combatStatistics: CombatStatisticsComponent,
} as const;
type ComponentMap = typeof ComponentClasses;
type ComponentProp = keyof ComponentMap;
type ComponentData = {[k in ComponentProp]: any}
export type EntityComponents = Partial<{[k in ComponentProp]: ComponentMap[k]}>

export type EntityData = {
    id?: number|undefined;
    components?: Partial<ComponentData>|undefined;
}

let ENTITY_ID = 1;

export class Entity {
    entityId: number;
    components: EntityComponents;
    constructor(data: EntityData) {
        this.entityId = data?.id || ENTITY_ID++;
        this.components = {};
        for(const k_str in data.components) {
            const k = k_str as ComponentProp;
            const component = new (ComponentClasses[k])(data.components?.[k]);
            this.components[k] = component;
        }
    }
    toJson = (): EntityData => {
      const components: Partial<ComponentData> = {};
      Object.keys(this.components).forEach(k_str => {
          const k = k_str as ComponentProp;
          components[k] = this.components[k]?.data;
      })
      return {
          id: this.entityId,
          components,
      };
    };
    static fromJson = (data: EntityData): Entity => new this(data);
}
