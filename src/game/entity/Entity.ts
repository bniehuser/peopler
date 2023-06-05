enum ComponentType {
    Behavior
}

interface ComponentMap {
    [k: ComponentType]: ComponentClasses[k];
}

class Entity<T extends ComponentMap> {
    [keyof T]: any
    fromJson = (data): typeof self => new self();
}