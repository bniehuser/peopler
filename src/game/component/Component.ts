export abstract class Component<T> {
    data: T;
    protected constructor(data: T) {
        this.data = data;
    }
}