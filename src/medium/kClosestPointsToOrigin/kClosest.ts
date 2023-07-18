import { euclidianDistance } from '@common/utils'
import { PriorityQueue } from '@common/priorityQueue'

function kClosest(points: number[][], k: number): number[][] {
    let priorityQueue = new PriorityQueue<[number, number]>()

    let values: number[][] = []

    for (const [x, y] of points) {
        let distance = euclidianDistance([x, y], [0, 0])

        priorityQueue.enqueue([x, y], distance * -1) // this is technically a max queue using a max heap so invert the values if you want them in reverse order
    }

    while (k > 0) {
        let node = priorityQueue.dequeue()

        values.push(node.value)

        k--
    }

    return values
}

export { kClosest }
