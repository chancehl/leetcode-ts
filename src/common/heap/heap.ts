export abstract class Heap {
    items: number[]

    constructor() {
        this.items = []
    }

    abstract add(n: number): void

    abstract remove(): void

    getLeftChildIndex(index: number): number {
        return 2 * index + 1
    }

    getRightChildIndex(index: number): number {
        return 2 * index + 2
    }

    getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildValue(index: number): number {
        return this.items[this.getLeftChildIndex(index)]
    }

    getRightChildValue(index: number): number {
        return this.items[this.getRightChildIndex(index)]
    }

    getParentValue(index: number): number {
        return this.items[this.getParentIndex(index)]
    }

    swap(indexA: number, indexB: number) {
        const temp = this.items[indexB]

        this.items[indexB] = this.items[indexA]
        this.items[indexA] = temp
    }
}
