import { Heap } from './heap'

export class MaxHeap extends Heap {
    constructor() {
        super()
    }

    add(n: number): void {
        this.items.push(n)

        let index = this.items.length - 1

        const current = this.items[index]

        while (index > 0) {
            let parentIndex = this.getParentIndex(index)
            let parent = this.getParentValue(index)

            if (parent <= current) {
                this.items[parentIndex] = current
                this.items[index] = parent

                index = parentIndex
            } else {
                break
            }
        }
    }

    remove(): number | null {
        const max = this.items[0]
        const end = this.items.pop()

        if (end == null) {
            return null
        }

        if (this.items.length > 0) {
            this.items[0] = end
        }

        let index = 0

        const length = this.items.length
        const current = this.items[0]

        while (true) {
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)

            let leftChild
            let rightChild
            let swap = null

            if (leftChildIndex < length) {
                leftChild = this.items[leftChildIndex]

                if (leftChild > current) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.items[rightChildIndex]

                if ((swap === null && rightChild > current) || (swap !== null && leftChild != null && rightChild > leftChild)) {
                    swap = rightChildIndex
                }
            }

            if (swap === null) {
                break
            }

            this.items[index] = this.items[swap]
            this.items[swap] = current

            index = swap
        }

        return max
    }

    getMax(): number {
        return this.items[0]
    }
}
