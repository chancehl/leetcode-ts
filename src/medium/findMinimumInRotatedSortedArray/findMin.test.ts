import { describe, test, expect } from 'bun:test'

import { findMin } from './findMin'

describe('findMin', () => {
    test('input 1', () => {
        expect(findMin([3, 4, 5, 1, 2])).toEqual(1)
    })

    test('input 2', () => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0)
    })

    test('input 3', () => {
        expect(findMin([11, 13, 15, 17])).toEqual(11)
    })
})
