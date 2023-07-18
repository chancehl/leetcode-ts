import { Heap } from './heap'

export class MaxHeap extends Heap {
    constructor() {
        super()
    }

    heapify(arr: number[]): number[] {
        throw new Error('Method not implemented.')
    }

    insert(n: number): void {
        throw new Error('Method not implemented.')
    }

    delete(): void {
        throw new Error('Method not implemented.')
    }

    getMax(): number {
        return this.items[0]
    }
}
