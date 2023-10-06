import { describe, test, expect } from 'bun:test'

import { heapSort } from './heapSort'

describe('heap sort', () => {
    test('input 1', () => {
        expect(heapSort([1, 5, 6, 3, 2, 4])).toEqual([6, 5, 4, 3, 2, 1])
    })

    test('input 2', () => {
        expect(heapSort([10, -5, 3, 8, 12, 10])).toEqual([12, 10, 10, 8, 3, -5])
    })
})
