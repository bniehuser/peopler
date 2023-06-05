export abstract class Component<T> {
    data: T;
    abstract readonly _defaultData: T;
    constructor(data?: Partial<T>) {
        this.data = Object.assign({}, this.defaultData, data);
    }
    get defaultData() { return this._defaultData; }
}