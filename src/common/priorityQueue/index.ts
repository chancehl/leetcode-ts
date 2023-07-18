// https://www.digitalocean.com/community/tutorials/js-binary-heaps
export class PriorityQueueNode<T = number> {
    value: T
    priority: number

    constructor(value: T, priority: number) {
        this.value = value
        this.priority = priority
    }
}

export class PriorityQueue<T = number> {
    values: PriorityQueueNode<T>[]

    constructor() {
        this.values = []
    }

    enqueue(value: T, priority: number) {
        let newNode = new PriorityQueueNode<T>(value, priority)

        this.values.push(newNode)

        let index = this.values.length - 1
        const current = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]

            if (parent.priority <= current.priority) {
                this.values[parentIndex] = current
                this.values[index] = parent

                index = parentIndex
            } else {
                break
            }
        }
    }

    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()

        if (end != null) {
            this.values[0] = end
        }

        let index = 0

        const length = this.values.length
        const current = this.values[0]

        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2

            let leftChild
            let rightChild

            let swap = null

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]

                if (leftChild.priority > current.priority) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]

                if (swap === null) {
                    if (rightChild.priority > current.priority) {
                        swap = rightChildIndex
                    }
                }

                if (swap !== null && leftChild != null) {
                    if (rightChild.priority > leftChild.priority) {
                        swap = rightChildIndex
                    }
                }
            }

            if (swap === null) {
                break
            }

            this.values[index] = this.values[swap]
            this.values[swap] = current

            index = swap
        }

        return max
    }
}
