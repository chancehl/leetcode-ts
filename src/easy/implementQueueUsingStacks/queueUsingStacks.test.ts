import { describe, test, expect } from 'bun:test'

import { MyQueue as Queue } from './queueUsingStacks'

describe('queue', () => {
    describe('queue.peek()', () => {
        test('returns a value if the queue length >= 1', () => {
            const queue = new Queue([1, 2, 3, 4, 5])

            expect(queue.peek()).toEqual(1)
        })

        test('returns NaN if the queue length === 0', () => {
            const queue = new Queue()

            expect(queue.peek()).toEqual(NaN)
        })
    })

    describe('queue.push()', () => {
        test('can push a number to an empty queue', () => {
            const queue = new Queue()

            queue.push(1)

            expect(queue.getElements()).toEqual([1])
        })

        test('can push a number to an existing queue', () => {
            const queue = new Queue([1, 2, 3])

            queue.push(4)

            expect(queue.getElements()).toEqual([1, 2, 3, 4])
        })

        test('can push multiple getElements()', () => {
            const queue = new Queue()

            queue.push(1)
            queue.push(2)
            queue.push(3)
            queue.push(4)

            expect(queue.getElements()).toEqual([1, 2, 3, 4])
        })
    })

    describe('queue.pop()', () => {
        test('returns NaN if queue length === 0', () => {
            const queue = new Queue()

            expect(queue.pop()).toEqual(NaN)
        })

        test('returns a value if queue length >= 1', () => {
            const queue = new Queue([1, 2, 3])

            expect(queue.pop()).toEqual(1)
        })

        test('can pop multiple getElements()', () => {
            const queue = new Queue([1, 2, 3])

            expect(queue.pop()).toEqual(1)
            expect(queue.getElements()).toEqual([2, 3])
            expect(queue.pop()).toEqual(2)
            expect(queue.getElements()).toEqual([3])
            expect(queue.pop()).toEqual(3)
            expect(queue.getElements()).toEqual([])
            expect(queue.pop()).toEqual(NaN)
            expect(queue.getElements()).toEqual([])
        })
    })
})
