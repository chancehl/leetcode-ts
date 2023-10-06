import { describe, test, expect } from 'bun:test'

import { PriorityQueue } from './'

describe('priority queue', () => {
    test('can enqueue several values', () => {
        const queue = new PriorityQueue()

        queue.enqueue(4, 5)
        queue.enqueue(31, 1)
        queue.enqueue(3, 2)
        queue.enqueue(6, 3)

        expect(queue.values.map((node) => node.value)).toEqual([4, 6, 3, 31])
    })

    test('can dequeue several values', () => {
        const queue = new PriorityQueue()

        queue.enqueue(4, 5)
        queue.enqueue(31, 1)
        queue.enqueue(3, 2)
        queue.enqueue(6, 3)

        expect(queue.values.map((node) => node.value)).toEqual([4, 6, 3, 31])
        expect(queue.dequeue()).toEqual({ value: 4, priority: 5 })
        expect(queue.dequeue()).toEqual({ value: 6, priority: 3 })
        expect(queue.dequeue()).toEqual({ value: 3, priority: 2 })
        expect(queue.dequeue()).toEqual({ value: 31, priority: 1 })
    })
})
