import { describe, test, expect } from 'bun:test'

import { twoSum } from './twoSum'

describe('twoSum', () => {
    test('TEST_CASE_1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    test('TEST_CASE_2', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })

    test('TEST_CASE_3', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
})
