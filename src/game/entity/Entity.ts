import {
    CharacteristicsComponent,
    MoodComponent,
    RelationshipsComponent,
    BehaviorComponent,
    Component
} from "../component";

const ComponentClasses = {
    relationships: RelationshipsComponent,
    characteristics: CharacteristicsComponent,
    mood: MoodComponent,
    behavior: BehaviorComponent,
} as const;
type ComponentMap = typeof ComponentClasses
type ComponentProp = keyof ComponentMap;
type ComponentClass = ComponentMap[ComponentProp];
type ComponentData = {[k in ComponentProp]: any}

type EntityData = {
    id?: number|undefined;
    components?: Partial<ComponentData>|undefined;
}

let ENTITY_ID = 1;

class Entity {
    entityId: number;
    components: Map<ComponentProp, ComponentClass>
    constructor(data: EntityData) {
        this.entityId = data?.id || ENTITY_ID++;
        this.components = new Map<ComponentProp, ComponentClass>();
        Object.keys(data?.components || {}).forEach(
            (k) => {
                if(k in ComponentClasses) {
                    const componentClass: ComponentClass = ComponentClasses[k as ComponentProp];
                    const componentData: ComponentData = data.components?.[k as ComponentProp];
                    this.components.set(k as ComponentProp, new componentClass(componentData));
                }
            }
        )
    }
    toJson = (): EntityData => {
      const components: Partial<ComponentData> = {};
      Object.keys(this.components).forEach(k => components[k as ComponentProp] = this.components.get(k)?.data)
      return {
          id: this.entityId,
          components,
      };
    };
    static fromJson = (data: EntityData): Entity => new this(data);
}