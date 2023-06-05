import { CharacteristicsComponent, MoodComponent, RelationshipsComponent, BehaviorComponent } from "../component";

const ComponentClasses = {
    behavior: BehaviorComponent,
    characteristics: CharacteristicsComponent,
    mood: MoodComponent,
    relationships: RelationshipsComponent,
};
type ComponentClassesType = typeof ComponentClasses;
type ComponentConfig = {[k: keyof ComponentClassesType]: typeof ComponentClasses[k].data};

class Entity<T = Partial<ComponentConfig>> {
    components: T
    constructor(data: T|undefined = undefined) {
        if(data) {
            Object.keys(data).forEach(
                (k: keyof ComponentConfig) => data[k] = new (ComponentClasses[k])(data[k])
            )
        }
        this.components = data || {} as T;
    }
    fromJson = (data): typeof self => new self();
}