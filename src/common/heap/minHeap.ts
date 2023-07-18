import { Heap } from './heap'

export class MinHeap extends Heap {
    constructor() {
        super()
    }

    add(n: number): void {
        throw new Error('Method not implemented.')
    }

    remove(): void {
        throw new Error('Method not implemented.')
    }

    getMin(): number {
        return this.items[0]
    }
}
