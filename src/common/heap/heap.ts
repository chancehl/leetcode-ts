export abstract class Heap {
    constructor() {}

    abstract insert(n: number): void

    abstract delete(): void
}
