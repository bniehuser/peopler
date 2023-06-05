export abstract class Component<T> {
    data: T;
    abstract readonly _defaultData: T;
    constructor(data?: Partial<T>) {
        this.data = Object.assign({}, this.defaultData, data);
    }
    get defaultData() { return this._defaultData; }

    toJson = () => this.data;
    static fromJson<T>(this: {new(data: Partial<T>): Component<T>}, data: Partial<T>): Component<T> { return new this(data); }

}
