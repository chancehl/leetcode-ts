import { Heap } from './heap'

export class MinHeap extends Heap {
    constructor() {
        super()
    }

    heapify(arr: number[]): void {
        throw new Error('Method not implemented.')
    }

    insert(n: number): void {
        throw new Error('Method not implemented.')
    }

    delete(): void {
        throw new Error('Method not implemented.')
    }

    getMin(): number {
        return this.items[0]
    }
}
